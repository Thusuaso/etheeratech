<script setup>
const projects = useProjects()

useSeoMeta({
  title: 'Portfolio — Shopify, Web Apps & Automation Projects | Etheera Tech',
  description:
    'Real projects built by Etheera Tech: multilingual Shopify stores, e-commerce dropshipping, internal ERP portals, local SEO websites, and web automation pipelines — delivered for clients in Turkey, the US, and Europe.',
  ogTitle: 'Etheera Tech Portfolio — Real Projects, Real Results',
  ogDescription:
    'Shopify development, Nuxt web apps, automation pipelines and local SEO — browse our latest client work.',
  ogImage: '/images/social-share.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="container mx-auto py-20 px-4">

    <!-- ─── HEADER ─────────────────────────────────────────────────── -->
    <div class="text-center mb-16">
      <div
        class="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4"
      >
        6 projects · Shopify, Nuxt, Python
      </div>

      <h1 class="text-4xl font-bold text-white mb-4">
        Our Work
      </h1>

      <p class="text-slate-400 max-w-2xl mx-auto leading-relaxed">
        From multilingual Shopify stores for natural stone exporters to local SEO
        websites, internal ERP portals, and dropshipping automation pipelines —
        every project is built with real technical depth, not templates.
      </p>

      <!-- Category pills — purely descriptive, no filter logic needed -->
      <div class="flex flex-wrap justify-center gap-2 mt-6">
        <span class="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">Shopify Development</span>
        <span class="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">Nuxt & Vue</span>
        <span class="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">E-Commerce</span>
        <span class="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">SEO</span>
        <span class="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">Automation</span>
        <span class="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">Web Apps</span>
      </div>
    </div>

    <!-- ─── PROJECT GRID (unchanged) ──────────────────────────────── -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NuxtLink
        v-for="project in projects"
        :key="project.id"
        :to="`/portfolio/${project.id}`"
        class="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20"
      >
        <div class="h-56 overflow-hidden relative">
          <img
            :src="project.gif"
            :alt="`${project.title} — Etheera Tech Project`"
            class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
            {{ project.title }}
          </h3>
          <p class="text-slate-400 text-sm line-clamp-2 mb-4">
            {{ project.desc }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in project.techStack.slice(0, 3)"
              :key="index"
              class="text-xs font-medium bg-slate-900 text-cyan-400 px-2 py-1 rounded"
            >
              {{ tech }}
            </span>
            <span
              v-if="project.techStack.length > 3"
              class="text-xs text-slate-500 py-1"
            >
              +{{ project.techStack.length - 3 }} more
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- ─── BOTTOM CTA ─────────────────────────────────────────────── -->
    <div class="text-center mt-20 pt-16 border-t border-slate-800">
      <p class="text-slate-500 text-sm uppercase tracking-wider font-semibold mb-3">
        Ready to build yours?
      </p>
      <h2 class="text-2xl font-bold text-white mb-4">
        Let's add your project to this list
      </h2>
      <p class="text-slate-400 text-sm mb-8 max-w-md mx-auto">
        Shopify store, web app, automation pipeline, or local SEO site —
        tell us what you need and we'll scope it out for free.
      </p>
      <NuxtLink to="/start">
        <button
          class="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          Start My Project
        </button>
      </NuxtLink>
    </div>

  </div>
</template>