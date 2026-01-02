<script setup>
const { locale, setLocale } = useI18n();

// Dili değiştirme fonksiyonu
const toggleLanguage = () => {
  const newLang = locale.value === "tr" ? "en" : "tr";
  setLocale(newLang);
};
</script>

<template>
  <button
    @click="toggleLanguage"
    class="flex items-center px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all group"
  >
    <Icon
      name="heroicons:language"
      class="text-slate-400 group-hover:text-cyan-400"
    />
    <span
      class="text-sm font-bold text-slate-300 group-hover:text-white uppercase"
    >
      {{ locale }}
    </span>
  </button>
</template>
