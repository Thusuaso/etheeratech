<script setup>
useSeoMeta({
  title: 'Shopify Developer & E-Commerce Agency | Etheera Tech',
  description:
    'Etheera Tech builds and optimizes Shopify stores for global e-commerce brands. Custom theme development, SEO audits, automation pipelines, and Nuxt web apps. Based in Turkey, serving clients worldwide.',
  ogTitle: 'Etheera Tech — Shopify Development, SEO & Web Automation Agency',
  ogDescription:
    'Custom Shopify stores, theme customization, SEO audits, and automation bots. We turn your e-commerce vision into a high-converting digital experience.',
  ogImage: '/images/social-share.png',
  twitterCard: 'summary_large_image',
})

const services = [
  {
    title: 'UI/UX Design',
    desc: 'Clean, modern interfaces tailored to your brand — wireframes, prototypes, and pixel-perfect designs that keep users engaged from the very first click.',
    icon: 'heroicons:paint-brush',
    color: 'text-purple-400',
  },
  {
    title: 'Nuxt & Vue Development',
    desc: 'Fast, SEO-friendly, and scalable web applications built with the latest Vue ecosystem. SSR, SSG, hybrid rendering — whichever fits your project best.',
    icon: 'heroicons:code-bracket',
    color: 'text-cyan-400',
  },
  {
    title: 'Shopify & E-Commerce Development',
    desc: 'Custom Shopify theme development, Liquid coding, app integrations, product import pipelines (Matrixify), multilingual setups (Weglot), and conversion-focused storefront design — end to end.',
    icon: 'heroicons:shopping-cart',
    color: 'text-emerald-400',
  },
  {
    title: 'SEO & Performance Optimization',
    desc: 'Technical SEO audits, Core Web Vitals fixes, structured data (JSON-LD), meta tag optimization, sitemap and robots.txt cleanup — ranked results you can actually measure.',
    icon: 'heroicons:presentation-chart-line',
    color: 'text-orange-400',
  },
  {
    title: 'Bots, Scrapers & Automation',
    desc: 'Web scraping pipelines with Playwright and BeautifulSoup, Shopify product data automation, Telegram bots, and custom scripts that eliminate hours of manual work every week.',
    icon: 'heroicons:cpu-chip',
    color: 'text-rose-400',
  },
  {
    title: 'Digital Consulting',
    desc: "Not sure where to start? We help you pick the right tech stack, map out your roadmap, and avoid costly mistakes before a single line of code is written.",
    icon: 'heroicons:light-bulb',
    color: 'text-yellow-400',
  },
]

const stats = [
  { value: '10+', label: 'Projects delivered' },
  { value: '3', label: 'Countries served' },
  { value: 'Shopify', label: 'Core platform' },
]
</script>

<template>
  <div class="pt-32 pb-20">

    <!-- ─── HERO ─────────────────────────────────────────────────── -->
    <section
      class="container mx-auto px-6 text-center lg:text-left lg:flex items-center justify-between min-h-[60vh]"
    >
      <div class="lg:w-1/2 space-y-6">

        <div
          class="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4"
        >
          🚀 Your Digital Transformation Starts Here
        </div>

        <!-- H1: keyword-rich, specific -->
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight">
          Shopify Development &amp;<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          >
            E-Commerce Solutions
          </span>
          That Actually Convert
        </h1>

        <!-- Extended descriptive paragraph -->
        <p class="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
          We build and scale Shopify stores — from custom theme development
          and multilingual setups to product data pipelines and technical SEO
          audits. Based in Turkey, delivering results for clients in the US,
          Europe, and beyond. Whether you're launching your first store or
          fixing a broken one, we have the technical depth to do it right.
        </p>

        <!-- CTA buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
        >
          <NuxtLink to="/start">
            <button
              class="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all"
            >
              Start My Project
            </button>
          </NuxtLink>
          <NuxtLink to="/portfolio">
            <button
              class="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white hover:border-white transition-all flex items-center justify-center gap-2"
            >
              <Icon name="heroicons:squares-2x2" size="24" />
              View Our Work
            </button>
          </NuxtLink>
        </div>

        <!-- Social proof stats -->
        <div class="flex gap-8 pt-6 justify-center lg:justify-start">
          <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
            <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-xs text-slate-500 uppercase tracking-wide mt-0.5">{{ stat.label }}</p>
          </div>
        </div>

      </div>

      <!-- Code block visual (unchanged) -->
      <div class="hidden lg:block lg:w-1/2 relative">
        <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-[100px] opacity-20 rounded-full"
        ></div>
        <div
          class="relative z-10 bg-slate-800/50 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500"
        >
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="space-y-4 font-mono text-sm text-slate-300">
            <p>
              <span class="text-purple-400">const</span> agency =
              <span class="text-yellow-300">"Etheera Tech"</span>;
            </p>
            <p>
              <span class="text-purple-400">await</span> agency.<span
                class="text-blue-400"
                >buildShopifyStore</span
              >();
            </p>
            <p>
              <span class="text-purple-400">await</span> agency.<span
                class="text-emerald-400"
                >optimizeSEO</span
              >();
            </p>
            <p>
              <span class="text-purple-400">await</span> agency.<span
                class="text-rose-400"
                >automateEverything</span
              >();
            </p>
            <p class="text-slate-500">// Result: Peak Performance ⚡</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SERVICES ──────────────────────────────────────────────── -->
    <section id="services" class="container mx-auto px-6 mt-32">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
        <!-- Keyword-rich, specific social proof -->
        <p class="text-slate-400 max-w-2xl mx-auto">
          From Shopify theme customization to full-stack Nuxt web apps —
          10+ projects delivered for clients in e-commerce, natural stone
          export, and B2B services across Turkey, the US, and Europe.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="group p-8 rounded-3xl bg-slate-800/30 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all duration-300"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10"
          >
            <Icon :name="service.icon" size="32" :class="service.color" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-white">{{ service.title }}</h3>
          <p class="text-slate-400 leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>
    </section>

  </div>
</template>