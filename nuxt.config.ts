// nuxt.config.ts
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
  ],

  // 1. Kendi CSS dosyamızı manuel ekliyoruz
  css: ["~/assets/css/main.css"],
  primevue: {
    options: {
      ripple: true, // Tıklama efekti
      inputVariant: "filled",
      theme: {
        preset: Aura, // Aura teması (Modern ve yuvarlak hatlı)
        options: {
          darkModeSelector: "system", // Sistem moduna göre veya '.dark' sınıfına göre
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },
  // 2. Tailwind varsayılan CSS'ini KAPATIYORUZ (Çakışmayı önler)
  tailwindcss: {
    cssPath: false,
    configPath: "tailwind.config.js",
    viewer: true,
  },
  icon: {
    serverBundle: {
      collections: ["heroicons"], // Sadece kullandığımız paketi sunucuda derle
    },
  },
  // 3. VITE GÜVENLİK DUVARI AYARI (Hatanın Çözümü)
  vite: {
    server: {
      fs: {
        // İzin verilen erişim listesini genişletiyoruz.
        // Projenizin bulunduğu ana klasörü buraya ekliyoruz.
        allow: [
          // Projenin çalıştığı mevcut dizin
          ".",
          // Üst dizinler (node_modules erişimi için)
          "..",
          // D Sürücüsündeki Projects klasörü (Hata mesajındaki yol)
          "D:/Projects",
        ],
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
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },
  runtimeConfig: {
    // Bu değişkenler sadece sunucu tarafında (server) okunabilir, güvenlidir.
    telegramBotToken: "8344438429:AAE6n7iD5zoq3tuuR5Zy4zLh9Xu4flv_0BA",
    telegramChatId: "7117895741",
  },

  // i18n: {
  //   lazy: true,
  //   langDir: "locales", // <--- Bu, "locales" klasörüne bak demektir.
  //   strategy: "prefix_except_default",
  //   defaultLocale: "tr",
  //   locales: [
  //     {
  //       code: "tr",
  //       iso: "tr-TR",
  //       name: "Turkish",
  //       file: "tr.json", // <--- locales/tr.json dosyasını arar
  //     },
  //     {
  //       code: "en",
  //       iso: "en-US",
  //       name: "English",
  //       file: "en.json", // <--- locales/en.json dosyasını arar
  //     },
  //   ],
  // },
});
