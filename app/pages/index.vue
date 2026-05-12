<script setup>
useSeoMeta({
  title: 'Home',
  description: 'Etheera Tech builds high-performance web apps, e-commerce stores, automation bots, and AI-powered digital experiences. Based in Turkey, serving clients worldwide.',
  ogTitle: 'Etheera Tech — Web Design, Development & Automation Agency',
  ogDescription: 'Nuxt & Vue development, UI/UX design, e-commerce, SEO, and custom automation solutions.',
  ogImage: '/images/social-share.png',
  twitterCard: 'summary_large_image',
})

const services = [
  {
    title: "UI/UX Design",
    desc: "Clean, modern interfaces that reflect your brand and keep users engaged from the first click.",
    icon: "heroicons:paint-brush",
    color: "text-purple-400",
  },
  {
    title: "Nuxt & Vue Development",
    desc: "Fast, SEO-friendly, and scalable web applications built with the latest Vue ecosystem.",
    icon: "heroicons:code-bracket",
    color: "text-cyan-400",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Custom storefronts with secure payment infrastructure designed to convert visitors into customers.",
    icon: "heroicons:shopping-cart",
    color: "text-emerald-400",
  },
  {
    title: "SEO & Performance",
    desc: "Rank higher on Google with lightning-fast, fully optimized sites built for Core Web Vitals.",
    icon: "heroicons:presentation-chart-line",
    color: "text-orange-400",
  },
  {
    title: "Bots & Automation",
    desc: "Telegram bots, web scraping pipelines, and custom scripts that eliminate repetitive work.",
    icon: "heroicons:cpu-chip",
    color: "text-rose-400",
  },
  {
    title: "Digital Consulting",
    desc: "Not sure where to start? We help you pick the right tech stack and strategy for your project.",
    icon: "heroicons:light-bulb",
    color: "text-yellow-400",
  },
]
</script>

<template>
  <div class="pt-32 pb-20">
    <section
      class="container mx-auto px-6 text-center lg:text-left lg:flex items-center justify-between min-h-[60vh]"
    >
      <div class="lg:w-1/2 space-y-6">
        <div
          class="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4"
        >
          🚀 Your Digital Transformation Starts Here
        </div>

        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight">
          Turn Your Digital Vision <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          >
            Into Reality
          </span>
        </h1>

        <p class="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
          We don't just build websites — we craft living digital experiences
          that grow with your brand. Push boundaries with Etheera Tech.
        </p>

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
      </div>

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
                >createAmazingWeb</span
              >();
            </p>
            <p class="text-slate-500">// Result: Peak Performance ⚡</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="container mx-auto px-6 mt-32">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
        <p class="text-slate-400">
          We don't just write code — we build value into your business.
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