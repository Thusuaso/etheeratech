// nuxt.config.ts
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "nuxt-gtag",
  ],

  css: ["~/assets/css/main.css"],

  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "system",
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },

  tailwindcss: {
    cssPath: false,
    configPath: "tailwind.config.js",
    viewer: true,
  },

  icon: {
    serverBundle: {
      collections: ["heroicons"],
    },
  },

  vite: {
    server: {
      fs: {
        allow: [".", "..", "D:/Projects"],
      },
    },
  },

  app: {
    head: {
      title: "Etheera Tech",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/logo-v2.png", // Önceki konuşmamızdaki logo adı
        },
        { rel: "apple-touch-icon", href: "/logo-v2.png" },
      ],
    },
  },

  // GÜVENLİK AYARI: Değerleri .env dosyasından çekecek
  runtimeConfig: {
    telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
  },

  site: {
    url: "https://etheeratech.com",
    name: "Etheera Tech",
    description: "Denizli Yazılım ve Teknoloji Ajansı - Web, Mobil, Yapay Zeka",
    defaultLocale: "tr",
    indexable: true,
    trailingSlash: false,
  },

  sitemap: {
    // Debug modunu açalım, terminalde hata varsa görelim
    debug: true,
    // XML dosyasının sıkıştırılmamış halini de üret (kontrol için)
    xsl: false,
    sitemaps: false,
    // Linkleri buraya MANUEL ve KESİN olarak yazıyoruz
    urls: [
      "/",
      "/portfolyo/goz-mekmar",
      "/portfolyo/mekmar-project",
      "/portfolyo/bulut-project",
      "/portfolyo/rast-project",
      "/portfolyo/ravilion-project",
    ],

    // Google'ın sevdiği standart ayarlar
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date(),
    },
  },

  // Statik üretim ayarları
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/sitemap.xml",
        // Buraya tekrar uzun uzun linkleri yazmana gerek yok, üstteki sitemap ayarı yeterli.
      ],
    },
  },

  robots: {
    allow: "/",
  },

  gtag: {
    id: "G-Q6DPD4YH1Y",
  },
});
