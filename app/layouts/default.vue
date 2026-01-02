<script setup>
// Menü linkleri
const links = [
  { name: "Hizmetler", to: "/#services" },
  { name: "Portfolyo", to: "/portfolyo" },
  { name: "İletişim", to: "/iletisim" },
];
</script>

<template>
  <div
    class="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white"
  >
    <header
      class="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md"
    >
      <div
        class="container mx-auto px-6 h-20 flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div
            class="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg"
          ></div>
          Etheera<span class="text-cyan-400">Tech</span>.
        </NuxtLink>

        <nav class="hidden md:flex gap-8">
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.to"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <NuxtLink
          to="/iletisim"
          class="hidden md:block px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-cyan-50 transition transform hover:scale-105"
        >
          Teklif Al
        </NuxtLink>
      </div>
    </header>

    <slot />

    <footer
      class="relative bg-slate-900 border-t border-white/10 pt-20 pb-10 overflow-hidden"
    >
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"
      ></div>

      <div class="container mx-auto px-6 relative z-10">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <div class="space-y-6">
            <NuxtLink
              to="/"
              class="text-2xl font-bold tracking-tighter flex items-center gap-2"
            >
              <div
                class="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg"
              ></div>
              Etheera<span class="text-cyan-400">Tech</span>.
            </NuxtLink>

            <p class="text-slate-400 leading-relaxed text-sm">
              Geleceğin dijital deneyimlerini bugünden tasarlıyoruz. Web, Mobil
              ve Yapay Zeka çözümleriyle markanızı dönüştürün.
            </p>

            <div class="flex gap-4">
              <a
                href="https://www.instagram.com/etheera.tech/"
                class="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
              >
                <Icon name="mdi:instagram" size="20" />
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
              >
                <Icon name="mdi:linkedin" size="20" />
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-400 hover:text-white hover:border-sky-400 transition-all duration-300"
              >
                <Icon name="mdi:twitter" size="20" />
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                <Icon name="mdi:github" size="20" />
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-white font-bold mb-6">Kurumsal</h3>
            <ul class="space-y-4 text-sm text-slate-400">
              <li>
                <NuxtLink
                  to="/"
                  class="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Icon name="heroicons:chevron-right" size="12" /> Ana Sayfa
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/portfolyo"
                  class="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Icon name="heroicons:chevron-right" size="12" /> Portfolyo
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/iletisim"
                  class="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Icon name="heroicons:chevron-right" size="12" /> İletişim &
                  Teklif
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold mb-6">Hizmetlerimiz</h3>
            <ul class="space-y-4 text-sm text-slate-400">
              <li>
                <NuxtLink
                  to="/#services"
                  class="hover:text-purple-400 transition-colors"
                  >Web Tasarım & UI/UX</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/#services"
                  class="hover:text-purple-400 transition-colors"
                  >Bot & Otomasyon</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/#services"
                  class="hover:text-purple-400 transition-colors"
                  >E-Ticaret Altyapısı</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/#services"
                  class="hover:text-purple-400 transition-colors"
                  >SEO Optimizasyonu</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold mb-6">Bize Ulaşın</h3>
            <ul class="space-y-4 text-sm text-slate-400">
              <li class="flex items-start gap-3">
                <Icon
                  name="heroicons:map-pin"
                  class="w-5 h-5 text-cyan-500 mt-0.5"
                />
                <span>Teknopark Denizli,<br />Sanayi Mah. No:1</span>
              </li>
              <li class="flex items-center gap-3">
                <Icon name="heroicons:envelope" class="w-5 h-5 text-cyan-500" />
                <a
                  href="mailto:info@etheeratech.com"
                  class="hover:text-white transition"
                >
                  info@etheeratech.com
                </a>
              </li>
              <li class="flex items-center gap-3">
                <Icon name="heroicons:phone" class="w-5 h-5 text-cyan-500" />
                <a href="tel:+905530257011" class="hover:text-white transition"
                  >+90 553 025 70 11</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p class="text-slate-500 text-sm">
            &copy; {{ new Date().getFullYear() }} Etheera Tech. Tüm hakları
            saklıdır.
          </p>

          <div class="flex gap-6 text-sm text-slate-500">
            <a href="#" class="hover:text-white transition"
              >Gizlilik Politikası</a
            >
            <a href="#" class="hover:text-white transition"
              >Kullanım Şartları</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
