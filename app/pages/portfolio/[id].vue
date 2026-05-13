<script setup>
const route = useRoute()
const projects = useProjects()

const project = computed(() => {
  return projects.find((p) => p.id === route.params.id)
})

useSeoMeta({
  title: () => project.value ? `${project.value.title} | Etheera Tech` : 'Project Detail | Etheera Tech',
  description: () => project.value ? project.value.desc : 'Etheera Tech project details.',
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.desc,
  ogImage: () => project.value?.gif,
})
</script>

<template>
  <div v-if="project" class="container mx-auto py-24 px-4">

    <!-- Back link -->
    <NuxtLink
      to="/portfolio"
      class="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition group"
    >
      <Icon name="heroicons:arrow-left" class="group-hover:-translate-x-1 transition" />
      Back to Portfolio
    </NuxtLink>

    <!-- ─── HERO: image + title / stack / CTA ─────────────────────── -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
      <div class="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-cyan-900/20 bg-slate-800">
        <img
          :src="project.gif"
          class="w-full h-auto object-cover"
          :alt="`${project.title} — Project Preview`"
        />
      </div>

      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {{ project.title }}
        </h1>
        <p class="text-slate-300 text-lg leading-relaxed mb-8">
          {{ project.desc }}
        </p>

        <div class="mb-8">
          <h3 class="text-cyan-400 font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
            <Icon name="heroicons:cpu-chip" /> Tech Stack
          </h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="px-4 py-2 bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-lg text-slate-200 transition"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
        >
          <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5" />
          Visit Live Site
        </a>

        <div
          v-else
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-500 text-sm cursor-not-allowed"
        >
          <Icon name="heroicons:lock-closed" class="w-4 h-4" />
          Private Project
        </div>
      </div>
    </div>

    <!-- ─── PROBLEM / SOLUTION / RESULT ──────────────────────────── -->
    <div v-if="project.content" class="border-t border-slate-800 pt-16 mb-16">

      <h2 class="text-2xl font-bold text-white mb-10 border-l-4 border-cyan-500 pl-4">
        Project breakdown
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Problem -->
        <div class="bg-slate-800/30 border border-white/5 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
              <Icon name="heroicons:exclamation-triangle" size="20" class="text-rose-400" />
            </div>
            <h3 class="text-white font-bold text-lg">The problem</h3>
          </div>
          <p class="text-slate-400 leading-relaxed text-sm">
            {{ project.content.problem }}
          </p>
        </div>

        <!-- Solution -->
        <div class="bg-slate-800/30 border border-white/5 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <Icon name="heroicons:wrench-screwdriver" size="20" class="text-cyan-400" />
            </div>
            <h3 class="text-white font-bold text-lg">What we built</h3>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(item, i) in project.content.solution"
              :key="i"
              class="flex items-start gap-2 text-sm text-slate-400 leading-relaxed"
            >
              <Icon name="heroicons:check" size="16" class="text-cyan-500 mt-0.5 flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Result -->
        <div class="bg-slate-800/30 border border-white/5 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <Icon name="heroicons:chart-bar" size="20" class="text-emerald-400" />
            </div>
            <h3 class="text-white font-bold text-lg">The result</h3>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(item, i) in project.content.result"
              :key="i"
              class="flex items-start gap-2 text-sm text-slate-400 leading-relaxed"
            >
              <Icon name="heroicons:arrow-trending-up" size="16" class="text-emerald-500 mt-0.5 flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- ─── SCREENSHOTS ───────────────────────────────────────────── -->
    <div v-if="project.images && project.images.length > 0" class="border-t border-slate-800 pt-16">
      <h2 class="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">
        Project screenshots
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(img, idx) in project.images"
          :key="idx"
          class="rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition group"
        >
          <img
            :src="img"
            class="w-full h-auto group-hover:scale-105 transition duration-500"
            :alt="`${project.title} — Screenshot ${idx + 1}`"
          />
        </div>
      </div>
    </div>

    <!-- ─── CTA ───────────────────────────────────────────────────── -->
    <div class="border-t border-slate-800 pt-16 text-center">
      <p class="text-slate-500 text-sm uppercase tracking-wider font-semibold mb-3">Want something similar?</p>
      <h3 class="text-2xl font-bold text-white mb-6">Let's talk about your project</h3>
      <NuxtLink to="/start">
        <button class="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
          Start My Project
        </button>
      </NuxtLink>
    </div>

  </div>

  <!-- Not found -->
  <div v-else class="min-h-[50vh] flex flex-col items-center justify-center text-center">
    <Icon name="heroicons:exclamation-circle" class="text-6xl text-slate-600 mb-4" />
    <h2 class="text-2xl font-bold text-white mb-2">Project Not Found</h2>
    <p class="text-slate-400 mb-6">
      This project may have been removed or the link might have changed.
    </p>
    <NuxtLink
      to="/portfolio"
      class="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition"
    >
      Back to Portfolio
    </NuxtLink>
  </div>
</template>