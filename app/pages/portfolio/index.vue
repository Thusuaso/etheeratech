<script setup>
const projects = useProjects()

useSeoMeta({
  title: 'Portfolio',
  description: 'Explore real projects built by Etheera Tech — web apps, e-commerce stores, automation bots, and custom software solutions delivered for clients worldwide.',
  ogTitle: 'Etheera Tech Portfolio — Real Projects, Real Results',
  ogDescription: 'Web apps, e-commerce, bots, and custom software built by Etheera Tech.',
  ogImage: '/images/social-share.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="container mx-auto py-20 px-4">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-white mb-4">Our Work</h1>
      <p class="text-slate-400 max-w-2xl mx-auto">
        Browse our latest projects — from high-performance web apps to
        fully automated workflows and custom e-commerce solutions.
      </p>
    </div>

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
  </div>
</template>