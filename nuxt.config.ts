// nuxt.config.ts
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@primevue/nuxt-module",
    "@nuxtjs/seo",
    "nuxt-gtag",
  ],

  css: ["~/assets/css/main.css"],

  experimental: {
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  fonts: {
    families: [{ name: "Outfit", weights: [300, 400, 600, 700] }],
  },

  primevue: {
    options: {
      ripple: false,
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
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "vue-router"],
          },
        },
      },
    },
    server: {
      fs: {
        allow: [".", "..", "D:/Projects"],
      },
    },
  },

  app: {
    head: {
      title: "Etheera Tech",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Etheera Tech is a full-service digital agency based in Denizli, Turkey. We build web apps, e-commerce stores, automation bots, and AI-powered solutions for clients worldwide.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Etheera Tech" },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:image",
          content: "https://etheeratech.com/images/social-share.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@etheeratech" },
        {
          name: "twitter:image",
          content: "https://etheeratech.com/images/social-share.png",
        },
        { name: "geo.region", content: "TR-20" },
        { name: "geo.placename", content: "Denizli" },
        { name: "geo.position", content: "37.7765;29.0864" },
        { name: "ICBM", content: "37.7765, 29.0864" },
      ],
      link: [
        { rel: "canonical", href: "https://etheeratech.com" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/logo-v2.png",
        },
        { rel: "apple-touch-icon", href: "/logo-v2.png" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Etheera Tech",
            url: "https://etheeratech.com",
            logo: "https://etheeratech.com/logo-v2.png",
            description:
              "Full-service digital agency based in Denizli, Turkey. Web apps, e-commerce, automation, and AI solutions.",
            email: "info@etheeratech.com",
            telephone: "+90-553-025-70-11",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sanayi Mah. No:1",
              addressLocality: "Denizli",
              addressRegion: "TR-20",
              addressCountry: "TR",
            },
            sameAs: ["https://www.instagram.com/etheera.tech/"],
          }),
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Etheera Tech",
            image: "https://etheeratech.com/images/social-share.png",
            url: "https://etheeratech.com",
            telephone: "+90-553-025-70-11",
            email: "info@etheeratech.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Teknopark, Sanayi Mah. No:1",
              addressLocality: "Denizli",
              addressRegion: "Denizli",
              postalCode: "20160",
              addressCountry: "TR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 37.7765,
              longitude: 29.0864,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "$$",
          }),
        },
      ],
    },
  },

  runtimeConfig: {
    telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
  },

  site: {
    url: "https://etheeratech.com",
    name: "Etheera Tech",
    description:
      "Full-service digital agency based in Denizli, Turkey. We build web apps, e-commerce stores, automation bots, and AI-powered solutions for clients worldwide.",
    defaultLocale: "en",
    indexable: true,
    trailingSlash: false,
  },

  sitemap: {
    debug: false,
    xsl: false,
    sitemaps: false,
    urls: [
      { loc: "/", priority: 1.0, changefreq: "weekly" },
      { loc: "/portfolio", priority: 0.9, changefreq: "weekly" },
      { loc: "/contact", priority: 0.9, changefreq: "monthly" },
      { loc: "/start", priority: 0.8, changefreq: "monthly" },
      { loc: "/portfolio/goz-mekmar", priority: 0.7, changefreq: "monthly" },
      {
        loc: "/portfolio/mekmar-project",
        priority: 0.7,
        changefreq: "monthly",
      },
      { loc: "/portfolio/bulut-project", priority: 0.7, changefreq: "monthly" },
      { loc: "/portfolio/rast-project", priority: 0.7, changefreq: "monthly" },
      {
        loc: "/portfolio/ravilion-project",
        priority: 0.7,
        changefreq: "monthly",
      },
    ],
    defaults: {
      lastmod: new Date(),
    },
  },

  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      wrangler: {
        compatibility_date: "2025-01-01",
      },
    },
    prerender: {
      crawlLinks: true,
      failOnError: false,
      ignore: ["/portfolio/**"],
      routes: ["/", "/portfolio", "/contact", "/start", "/sitemap.xml"],
    },
  },

  routeRules: {
    "/": { cache: { maxAge: 60 * 60 } },
    "/_nuxt/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/images/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/**": { cache: { maxAge: 60 * 60 * 24 } },
  },

  robots: {
    allow: "/",
    disallow: ["/api/"],
  },

  gtag: {
    id: "G-Q6DPD4YH1Y",
  },
});
