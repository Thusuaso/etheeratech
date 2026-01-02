<script setup>
useHead({
  title: "İletişim & Teklif | Etheera Tech",
  meta: [
    {
      name: "description",
      content:
        "Projeniz için fiyat teklifi alın. Etheera Tech ile iletişime geçin.",
    },
  ],
});
const toast = useToast();
// Form Verileri
const form = reactive({
  name: "",
  email: "",
  phone: "",
  service: "", // Seçilen hizmet
  budget: "", // Seçilen bütçe aralığı
  message: "",
});

// Seçenekler
const services = [
  "Web Tasarım",
  "E-Ticaret",
  "SEO & Pazarlama",
  "Şirketlere Özel Yazılım",
  "Bot & Otomasyon",
  "Diğer",
];

const budgets = [
  "₺20.000 - ₺50.000",
  "₺50.000 - ₺100.000",
  "₺100.000+",
  "Henüz Bütçe Belirlenmedi",
];
let isLoading = ref(false);
// Gönderme Fonksiyonu (Simülasyon)
// GÖNDERME İŞLEMİ
const handleSubmit = async () => {
  // 1. Validasyon (Eksik Bilgi Kontrolü)
  if (!form.name || !form.email || !form.phone) {
    toast.add({
      severity: "warn",
      summary: "Eksik Bilgi",
      detail: "Lütfen ad, e-posta ve telefon alanlarını doldurun.",
      life: 3000,
    });
    return;
  }

  isLoading.value = true;

  try {
    const response = await $fetch("/api/send-telegram", {
      method: "POST",
      body: form,
    });

    if (response.success) {
      // 2. BAŞARILI BİLDİRİMİ (Yeşil)
      toast.add({
        severity: "success",
        summary: "Teklif Alındı 🚀",
        detail: `Teşekkürler ${
          form.name.split(" ")[0]
        }, projenizi inceleyip en kısa sürede dönüş yapacağız.`,
        life: 5000,
      });

      // Formu temizle
      form.name = "";
      form.email = "";
      form.phone = "";
      form.service = "";
      form.budget = "";
      form.message = "";
    }
  } catch (error) {
    // 3. HATA BİLDİRİMİ (Kırmızı)
    toast.add({
      severity: "error",
      summary: "Gönderilemedi",
      detail:
        "Bir sunucu hatası oluştu. Lütfen WhatsApp veya telefon üzerinden ulaşın.",
      life: 5000,
    });
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="pt-32 pb-20 container mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-start">
      <div class="space-y-8">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Bir Sonraki Büyük Projeyi <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
              >Birlikte İnşa Edelim</span
            >
          </h1>
          <p class="text-slate-400 text-lg leading-relaxed">
            Dijital hedeflerinizi dinlemek için sabırsızlanıyoruz. Formu
            doldurun, projenizi nasıl hayata geçirebileceğimizi konuşalım.
          </p>
        </div>

        <div class="space-y-4">
          <div
            class="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-white/5"
          >
            <div
              class="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400"
            >
              <Icon name="heroicons:envelope" size="24" />
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase font-bold">E-Posta</p>
              <a
                href="mailto:info@etheeratech.com"
                class="text-white hover:text-cyan-400 transition"
              >
                info@etheeratech.com
              </a>
            </div>
          </div>

          <div
            class="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-white/5"
          >
            <div
              class="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400"
            >
              <Icon name="heroicons:map-pin" size="24" />
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase font-bold">Ofis</p>
              <p class="text-white">Denizli, Teknopark Ofisleri</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-20 blur-xl"
        ></div>

        <form
          @submit.prevent="handleSubmit"
          class="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl space-y-6"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300 ml-1"
                >Adınız Soyadınız</label
              >
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                placeholder="İsim Soyisim"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300 ml-1"
                >E-Posta Adresiniz</label
              >
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                placeholder="ornek@sirket.com"
              />
            </div>
          </div>
          <div class="space-y-2 mt-6">
            <label class="text-sm font-medium text-slate-300 ml-1"
              >Telefon Numaranız</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
              >
                <span class="text-slate-500 text-sm">+90</span>
              </div>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                placeholder="555 000 00 00"
              />
            </div>
          </div>

          <div class="space-y-3">
            <label class="text-sm font-medium text-slate-300 ml-1"
              >Hangi konuda yardıma ihtiyacınız var?</label
            >
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <button
                type="button"
                v-for="item in services"
                :key="item"
                @click="form.service = item"
                :class="[
                  'px-3 py-3 rounded-xl text-sm font-medium border transition-all duration-200',
                  form.service === item
                    ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500',
                ]"
              >
                {{ item }}
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300 ml-1"
              >Proje Bütçeniz (Tahmini)</label
            >
            <select
              v-model="form.budget"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-cyan-500 transition-all"
            >
              <option value="" disabled selected>Bir aralık seçin</option>
              <option v-for="b in budgets" :key="b" :value="b">{{ b }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300 ml-1"
              >Proje Detayları</label
            >
            <textarea
              v-model="form.message"
              rows="4"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
              placeholder="Aklınızdaki projeden kısaca bahsedin..."
            ></textarea>
          </div>

          <Button
            type="submit"
            label="Teklif İste"
            :loading="isLoading"
            class="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 border-none text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            <template #icon v-if="!isLoading">
              <Icon name="heroicons:paper-airplane" class="w-6 h-6" />
            </template>
            <template #loadingicon>
              <Icon name="heroicons:arrow-path" class="w-6 h-6 animate-spin" />
            </template>
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>
