<script setup>
useHead({
  title: "Projemi Başlat | Etheera Tech",
});
useSeoMeta({
  title: 'Projemi Başlat',
  description: 'Etheera Tech ile işletmenizi dijitalleştirin. Web tasarım, mobil uygulama ve yapay zeka çözümleriyle geleceği bugünden yakalayın.',
  ogTitle: 'Etheera Tech - Dijital Çözüm Ortağınız',
  ogDescription: 'Web, Mobil ve Yapay Zeka çözümleri.',
  ogImage: '/images/social-share.png', // WhatsApp/Twitter'da paylaşınca çıkacak resim
  twitterCard: 'summary_large_image',
})
const toast = useToast();
const isLoading = ref(false);

// Aktif Adım (1 ile 4 arası)
const currentStep = ref(1);

// Form Verileri
const form = reactive({
  type: "", // Proje Türü
  features: [], // Ek özellikler
  budget: "", // Bütçe
  timeline: "", // Zaman
  name: "",
  email: "",
  phone: "",
  message: "", // Özet mesaj
});

// SEÇENEKLER
const projectTypes = [
  { id: "web", title: "Web Sitesi", icon: "heroicons:globe-alt" },
  { id: "ecommerce", title: "E-Ticaret", icon: "heroicons:shopping-bag" },
  {
    id: "mobile",
    title: "Mobil Uygulama",
    icon: "heroicons:device-phone-mobile",
  },
  { id: "bot", title: "Bot / Otomasyon", icon: "heroicons:cpu-chip" },
  {
    id: "redesign",
    title: "Yenileme (Redesign)",
    icon: "heroicons:paint-brush",
  },
  { id: "other", title: "Özel Yazılım / Diğer", icon: "heroicons:cube" },
];

const featuresList = [
  "Yönetim Paneli (CMS)",
  "Ödeme Sistemi",
  "Çoklu Dil",
  "Kullanıcı Girişi",
  "SEO Çalışması",
  "Logo Tasarımı",
  "Animasyonlu Arayüz",
  "Veri Analizi / Raporlama",
];

const budgets = ["₺20k - ₺50k", "₺50k - ₺100k", "₺100k - ₺250k", "₺250k+"];

const timelines = ["Acil (1 Ay)", "1-3 Ay", "3-6 Ay", "Esnek Zaman"];

// --- FONKSİYONLAR ---

// Özellik Seç/Kaldır (Toggle)
const toggleFeature = (feature) => {
  if (form.features.includes(feature)) {
    form.features = form.features.filter((f) => f !== feature);
  } else {
    form.features.push(feature);
  }
};

// İLERİ GİT
const nextStep = () => {
  if (currentStep.value === 1 && !form.type) {
    toast.add({
      severity: "warn",
      summary: "Seçim Yapın",
      detail: "Lütfen bir proje türü seçin.",
      life: 2000,
    });
    return;
  }
  if (currentStep.value < 4) currentStep.value++;
};

// GERİ GİT
const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--;
};

// GÖNDER (Telegram'a)
const submitProject = async () => {
  if (!form.name || !form.phone) {
    toast.add({
      severity: "warn",
      summary: "Eksik Bilgi",
      detail: "İletişim bilgilerini doldurun.",
      life: 3000,
    });
    return;
  }

  isLoading.value = true;

  // Mesajı derleyip API'ye uygun hale getiriyoruz
  const payload = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    service: form.type, // API'deki 'service' alanına proje türünü atadık
    budget: form.budget,
    // Mesaj alanına detayları ekliyoruz
    message: `
      SÜRE: ${form.timeline}
      ÖZELLİKLER: ${form.features.join(", ")}
      NOT: Proje sihirbazı üzerinden gönderildi.
    `,
  };

  try {
    const response = await $fetch("/api/send-telegram", {
      method: "POST",
      body: payload,
    });

    if (response.success) {
      toast.add({
        severity: "success",
        summary: "Başvurunuz Alındı! 🚀",
        detail: "Proje detaylarını inceleyip sizi arayacağız.",
        life: 5000,
      });
      // Başarılı sayfasına yönlendirme veya resetleme yapılabilir.
      currentStep.value = 1;
      // Reset form...
    }
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Hata",
      detail: "Sunucu hatası.",
      life: 3000,
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div
    class="pt-32 pb-20 container mx-auto px-6 min-h-screen flex flex-col items-center"
  >
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">
        Projenizi Kurgulayalım
      </h1>
      <p class="text-slate-400">
        Hayalinizdeki dijital ürünü oluşturmak için aşağıdaki adımları takip
        edin.
      </p>
    </div>

    <div
      class="w-full max-w-3xl bg-slate-800 rounded-full h-2 mb-12 relative overflow-hidden"
    >
      <div
        class="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
        :style="{ width: (currentStep / 4) * 100 + '%' }"
      ></div>
    </div>

    <div
      class="w-full max-w-4xl bg-slate-900/50 border border-white/10 rounded-3xl p-6 md:p-10 relative backdrop-blur-sm"
    >
      <div v-if="currentStep === 1" class="animate-fade-in">
        <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <span
            class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm"
            >1</span
          >
          Ne inşa etmek istiyorsunuz?
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="item in projectTypes"
            :key="item.id"
            @click="form.type = item.id"
            :class="[
              'cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center hover:scale-[1.02]',
              form.type === item.id
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 ring-1 ring-cyan-500'
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500',
            ]"
          >
            <Icon :name="item.icon" size="40" />
            <span class="font-medium">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <div v-else-if="currentStep === 2" class="animate-fade-in">
        <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <span
            class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm"
            >2</span
          >
          Hangi özelliklere ihtiyacınız var?
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div
            v-for="feature in featuresList"
            :key="feature"
            @click="toggleFeature(feature)"
            :class="[
              'cursor-pointer px-4 py-3 rounded-xl border text-sm font-medium transition-all text-center select-none',
              form.features.includes(feature)
                ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/20'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500',
            ]"
          >
            {{ feature }}
          </div>
        </div>
      </div>

      <div v-else-if="currentStep === 3" class="animate-fade-in">
        <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <span
            class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm"
            >3</span
          >
          Bütçe ve Zamanlama
        </h2>

        <div class="space-y-8">
          <div>
            <label class="block text-slate-400 mb-3 text-sm font-bold uppercase"
              >Tahmini Bütçe</label
            >
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                v-for="b in budgets"
                :key="b"
                @click="form.budget = b"
                type="button"
                :class="[
                  'py-3 rounded-xl border text-sm transition-all',
                  form.budget === b
                    ? 'bg-cyan-600 border-cyan-600 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-400',
                ]"
              >
                {{ b }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-slate-400 mb-3 text-sm font-bold uppercase"
              >Hedeflenen Süre</label
            >
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                v-for="t in timelines"
                :key="t"
                @click="form.timeline = t"
                type="button"
                :class="[
                  'py-3 rounded-xl border text-sm transition-all',
                  form.timeline === t
                    ? 'bg-cyan-600 border-cyan-600 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-400',
                ]"
              >
                {{ t }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="currentStep === 4" class="animate-fade-in">
        <h2 class="text-2xl font-bold mb-6 text-white flex items-center gap-2">
          <span
            class="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm"
            >4</span
          >
          Size nasıl ulaşalım?
        </h2>

        <div class="space-y-4 max-w-2xl mx-auto">
          <div class="grid md:grid-cols-2 gap-4">
            <input
              v-model="form.name"
              type="text"
              placeholder="Adınız Soyadınız"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
            />
            <input
              v-model="form.phone"
              type="tel"
              placeholder="Telefon (0555...)"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
            />
          </div>
          <input
            v-model="form.email"
            type="email"
            placeholder="E-Posta Adresi"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
          />

          <div
            class="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-sm text-slate-400 mt-4"
          >
            <p>
              <strong class="text-white">Proje Özeti:</strong> {{ form.type }}
            </p>
            <p>
              <strong class="text-white">Seçilenler:</strong>
              {{ form.features.length }} özellik
            </p>
            <p><strong class="text-white">Bütçe:</strong> {{ form.budget }}</p>
          </div>
        </div>
      </div>

      <div
        class="flex justify-between items-center mt-10 pt-6 border-t border-white/10"
      >
        <button
          v-if="currentStep > 1"
          @click="prevStep"
          class="text-slate-400 hover:text-white px-6 py-2 flex items-center gap-2"
        >
          <Icon name="heroicons:arrow-left" /> Geri
        </button>
        <div v-else></div>
        <Button
          v-if="currentStep < 4"
          @click="nextStep"
          label="Devam Et"
          icon="pi pi-arrow-right"
          iconPos="right"
          class="px-8 py-3 rounded-xl bg-white text-slate-900 font-bold border-none hover:bg-cyan-50"
        />

        <Button
          v-else
          @click="submitProject"
          label="Projeyi Başlat"
          :loading="isLoading"
          class="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 border-none font-bold text-white hover:shadow-lg hover:shadow-purple-500/25"
        >
          <template #loadingicon>
            <Icon name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Basit Fade Animasyonu */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
