// server/api/send-telegram.post.ts

const hits = new Map<string, number[]>();

const BLOCKED_PATTERNS = [
  /\b(seo services|crypto|casino|betting|payday|viagra|backlink)\b/i,
  /[\u0400-\u04FF]{10,}/, // uzun Kiril blokları
  /(https?:\/\/[^\s]+){2,}/i, // 2+ link
];

const escapeHtml = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const ip =
    (getRequestHeader(event, "x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown";
  const origin = getRequestHeader(event, "origin") || "";
  const ua = getRequestHeader(event, "user-agent") || "none";

  // --- Sessiz spam filtreleri: bota başarılı olduğunu düşündür ---

  // 1) Origin kontrolü — doğrudan curl/script isteklerini keser
  if (import.meta.prod && !origin.includes("etheeratech.com")) {
    console.warn("[spam] origin:", origin, ip);
    return { success: true, message: "Mesaj iletildi" };
  }

  // 2) Honeypot — insanlar bu alanı görmez
  if (body?.website) {
    console.warn("[spam] honeypot", ip);
    return { success: true, message: "Mesaj iletildi" };
  }

  // 3) Zaman kontrolü — 3 sn'den hızlı veya 6 saatten eski form
  const elapsed = Date.now() - Number(body?._t || 0);
  if (!body?._t || elapsed < 3000 || elapsed > 6 * 60 * 60 * 1000) {
    console.warn("[spam] timing:", elapsed, ip);
    return { success: true, message: "Mesaj iletildi" };
  }

  // 4) İçerik filtresi
  const blob = `${body.name} ${body.email} ${body.message}`;
  if (BLOCKED_PATTERNS.some((p) => p.test(blob))) {
    console.warn("[spam] content", ip);
    return { success: true, message: "Mesaj iletildi" };
  }

  // --- Rate limit ---
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3600_000);
  if (recent.length >= 3) {
    throw createError({ statusCode: 429, statusMessage: "Çok fazla istek" });
  }
  hits.set(ip, [...recent, now]);
  if (hits.size > 5000) hits.clear(); // bellek koruması

  // --- Doğrulama (try dışında, 500'e dönüşmesin) ---
  if (!body.name || !body.email || !body.phone) {
    throw createError({ statusCode: 400, statusMessage: "Eksik bilgi" });
  }
  if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: "Geçersiz e-posta" });
  }
  if (
    String(body.name).length > 100 ||
    String(body.message || "").length > 2000
  ) {
    throw createError({ statusCode: 400, statusMessage: "Alan çok uzun" });
  }

  // --- Telegram ---
  const message = `
<b>🚀 Etheera Tech | Yeni Teklif</b>

👤 <b>Müşteri:</b> ${escapeHtml(body.name)}
📧 <b>E-Posta:</b> ${escapeHtml(body.email)}
📞 <b>Telefon:</b> ${escapeHtml(body.phone)}
🛠 <b>Hizmet:</b> ${escapeHtml(body.service) || "Belirtilmedi"}
💰 <b>Bütçe:</b> ${escapeHtml(body.budget) || "Belirtilmedi"}

📝 <b>Mesaj:</b>
${escapeHtml(body.message)}

<i>IP: ${escapeHtml(ip)}
UA: ${escapeHtml(ua).slice(0, 80)}</i>
  `.trim();

  try {
    await $fetch(
      `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`,
      {
        method: "POST",
        body: {
          chat_id: config.telegramChatId,
          text: message,
          parse_mode: "HTML",
        },
      },
    );
    return { success: true, message: "Mesaj iletildi" };
  } catch (error) {
    console.error("Telegram Hatası:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Mesaj gönderilirken sunucu hatası oluştu.",
    });
  }
});
