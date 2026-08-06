<script setup>
const route = useRoute();
const projects = useProjects();

const project = computed(() => projects.find((p) => p.id === route.params.id));

const index = computed(() =>
  projects.findIndex((p) => p.id === route.params.id),
);
const num = computed(() =>
  index.value >= 0 ? String(index.value + 1).padStart(2, "0") : "--",
);

const next = computed(() => {
  if (index.value < 0) return null;
  return projects[(index.value + 1) % projects.length];
});

useSeoMeta({
  title: () => project.value?.title || "Project not found",
  description: () => project.value?.desc || "This project could not be found.",
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.desc,
  ogImage: () => project.value?.gif,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="pt-14">
    <!-- ── FOUND ─────────────────────────────────────────────── -->
    <template v-if="project">
      <section class="mx-auto max-w-6xl px-5 pt-16 pb-10">
        <nav class="label mb-8">
          <NuxtLink to="/portfolio" class="hover:text-cobalt transition-colors">
            Work
          </NuxtLink>
          <span class="mx-2 text-rule">/</span>
          <span>N&deg;{{ num }}</span>
        </nav>

        <div class="grid lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-7">
            <h1
              class="font-display font-semibold tracking-[-0.03em] leading-[1.03] text-[2.1rem] sm:text-[2.9rem] text-balance"
            >
              {{ project.title }}
            </h1>
            <p class="mt-6 text-[1.08rem] leading-relaxed text-ink/85">
              {{ project.desc }}
            </p>
          </div>

          <!-- spec panel -->
          <div class="lg:col-span-4 lg:col-start-9">
            <div class="bg-panel border-l-2 border-cobalt p-5">
              <p class="label mb-2">Stack</p>
              <ul class="space-y-1 mb-5">
                <li
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="font-mono text-[0.75rem] text-ink/80"
                >
                  {{ tech }}
                </li>
              </ul>

              <template v-if="project.link">
                <p class="label mb-2">Live</p>
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  class="font-mono text-[0.78rem] text-cobalt border-b border-cobalt hover:text-ink hover:border-ink transition-colors break-all"
                >
                  {{ project.link.replace(/^https?:\/\//, "") }} &rarr;
                </a>
              </template>
            </div>
          </div>
        </div>
      </section>

      <!-- the file -->
      <section class="mx-auto max-w-6xl px-5 mt-6">
        <div class="grid lg:grid-cols-12 gap-10 border-t border-ink pt-8">
          <div class="lg:col-span-3">
            <p class="label">The problem</p>
          </div>
          <div class="lg:col-span-8">
            <p class="text-[1.05rem] leading-[1.72] text-ink/85">
              {{ project.content.problem }}
            </p>
          </div>
        </div>

        <div
          class="grid lg:grid-cols-12 gap-10 border-t border-rule mt-12 pt-8"
        >
          <div class="lg:col-span-3">
            <p class="label">What we built</p>
          </div>
          <div class="lg:col-span-8">
            <ol class="border-t border-rule">
              <li
                v-for="(item, i) in project.content.solution"
                :key="i"
                class="flex gap-4 py-3 border-b border-rule"
              >
                <span
                  class="font-mono text-[0.7rem] text-cobalt shrink-0 w-6 pt-1"
                >
                  {{ String(i + 1).padStart(2, "0") }}
                </span>
                <span class="text-[1rem] leading-relaxed text-ink/85">{{
                  item
                }}</span>
              </li>
            </ol>
          </div>
        </div>

        <div
          class="grid lg:grid-cols-12 gap-10 border-t border-rule mt-12 pt-8"
        >
          <div class="lg:col-span-3">
            <p class="label">Outcome</p>
          </div>
          <div class="lg:col-span-8">
            <ul class="border-t border-rule">
              <li
                v-for="(item, i) in project.content.result"
                :key="i"
                class="flex gap-4 py-3 border-b border-rule"
              >
                <span
                  class="font-mono text-[0.7rem] text-cobalt shrink-0 w-6 pt-1"
                  >&mdash;</span
                >
                <span class="text-[1rem] leading-relaxed text-ink/85">{{
                  item
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- next -->
      <section v-if="next" class="mx-auto max-w-6xl px-5 mt-20">
        <NuxtLink
          :to="`/portfolio/${next.id}`"
          class="group block border-t border-ink pt-8 hover:bg-panel transition-colors"
        >
          <p class="label mb-3">Next project</p>
          <h2
            class="font-display font-semibold text-[1.6rem] sm:text-[2.2rem] tracking-tight leading-tight max-w-2xl group-hover:text-cobalt transition-colors"
          >
            {{ next.title }} &rarr;
          </h2>
        </NuxtLink>
      </section>
    </template>

    <!-- ── NOT FOUND ─────────────────────────────────────────── -->
    <section v-else class="mx-auto max-w-6xl px-5 pt-24 pb-20">
      <p class="label text-oxide mb-6">Not on file</p>
      <h1
        class="font-display font-semibold text-[2.2rem] tracking-tight leading-tight"
      >
        No project at this address.
      </h1>
      <p class="mt-5 text-[1.05rem] leading-relaxed max-w-lg text-ink/85">
        The link may have changed, or this project was never filed here.
      </p>
      <NuxtLink
        to="/portfolio"
        class="inline-block mt-8 font-mono text-[0.85rem] tracking-wide text-paper bg-ink px-6 py-3 hover:bg-cobalt transition-colors"
      >
        &larr; All work
      </NuxtLink>
    </section>
  </div>
</template>
