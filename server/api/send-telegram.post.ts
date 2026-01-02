// server/api/send-telegram.post.ts

export default defineEventHandler(async (event) => {
  console.log("Telegram API çağrısı başladı...");
  try {
    // 1. Formdan gelen veriyi oku
    const body = await readBody(event);

    // 2. Ayarlardan Token'ları al
    const config = useRuntimeConfig();

    // Basit doğrulama
    if (!body.name || !body.phone) {
      throw createError({ statusCode: 400, statusMessage: "Eksik bilgi" });
    }

    // 3. Telegram Mesajını Oluştur (HTML Formatında)
    const message = `
<b>🚀 Etheera Tech | Yeni Teklif</b>

👤 <b>Müşteri:</b> ${body.name}
📧 <b>E-Posta:</b> ${body.email}
📞 <b>Telefon:</b> ${body.phone}
🛠 <b>Hizmet:</b> ${body.service || "Belirtilmedi"}
💰 <b>Bütçe:</b> ${body.budget || "Belirtilmedi"}

📝 <b>Mesaj:</b>
${body.message}
    `;

    // 4. Telegram API'ye gönder
    const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;

    await $fetch(url, {
      method: "POST",
      body: {
        chat_id: config.telegramChatId,
        text: message,
        parse_mode: "HTML", // Kalın yazı vs. çalışması için
      },
    });

    return { success: true, message: "Mesaj iletildi" };
  } catch (error) {
    console.error("Telegram Hatası:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Mesaj gönderilirken sunucu hatası oluştu.",
    });
  }
});
