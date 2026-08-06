<script setup>
const projects = useProjects();

useSeoMeta({
  title: "Work",
  description:
    "Shopify stores, catalogue pipelines, ERP portals, and automation built by Etheera Tech for clients in Turkey, the US, and Europe — natural stone export, wholesale tile, dropshipping, and local SEO.",
  ogTitle: "Work — Etheera Tech",
  ogDescription:
    "Shopify development, Nuxt web apps, catalogue pipelines and automation. Browse the projects.",
  ogImage: "/images/social-share.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="pt-14">
    <!-- MASTHEAD -->
    <section class="mx-auto max-w-6xl px-5 pt-20 pb-10">
      <p class="label text-cobalt mb-8">Selected work</p>

      <h1
        class="font-display font-semibold tracking-[-0.03em] leading-[1] text-[2.4rem] sm:text-[3.4rem] max-w-3xl text-balance"
      >
        Stores that had to carry weight.
      </h1>

      <p class="mt-8 text-lg leading-relaxed max-w-2xl text-ink/85">
        Multilingual storefronts for natural stone exporters, wholesale tile
        catalogues built for the US market, internal ERP portals, and the
        automation underneath them. Every one shipped and running.
      </p>

      <dl class="grid grid-cols-2 sm:grid-cols-4 border-t border-ink mt-10">
        <div class="py-3 pr-4 border-b border-rule sm:border-b-0">
          <dt class="label mb-1">Projects</dt>
          <dd class="font-mono text-[0.85rem]">{{ projects.length }} filed</dd>
        </div>
        <div class="py-3 pr-4 border-b border-rule sm:border-b-0">
          <dt class="label mb-1">Markets</dt>
          <dd class="font-mono text-[0.85rem]">TR · US · EU</dd>
        </div>
        <div class="py-3 pr-4">
          <dt class="label mb-1">Core platform</dt>
          <dd class="font-mono text-[0.85rem]">Shopify</dd>
        </div>
        <div class="py-3 pr-4">
          <dt class="label mb-1">Also</dt>
          <dd class="font-mono text-[0.85rem]">Nuxt · Python</dd>
        </div>
      </dl>
    </section>

    <!-- GRID -->
    <section class="mx-auto max-w-6xl px-5">
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border-t border-ink"
      >
        <NuxtLink
          v-for="(project, i) in projects"
          :key="project.id"
          :to="`/portfolio/${project.id}`"
          class="group bg-paper hover:bg-panel transition-colors p-6 flex flex-col min-h-[15rem]"
        >
          <div class="flex items-baseline justify-between mb-4">
            <span class="font-mono text-[0.7rem] text-cobalt">
              N&deg;{{ String(i + 1).padStart(2, "0") }}
            </span>
            <span class="label">{{ project.techStack.length }} tools</span>
          </div>

          <h2
            class="font-display font-semibold text-[1.05rem] tracking-tight leading-snug group-hover:text-cobalt transition-colors"
          >
            {{ project.title }}
          </h2>

          <p
            class="mt-2 text-[0.95rem] leading-relaxed text-ink/75 line-clamp-4"
          >
            {{ project.desc }}
          </p>

          <p
            class="font-mono text-[0.7rem] text-graphite mt-auto pt-4 border-t border-rule"
          >
            {{ project.techStack.slice(0, 4).join(" · ") }}
          </p>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-6xl px-5 mt-20">
      <div class="border-t border-ink pt-10">
        <h2
          class="font-display font-semibold text-[1.9rem] sm:text-[2.6rem] tracking-tight leading-[1.05] max-w-2xl"
        >
          Add yours to the file.
        </h2>
        <p class="mt-5 text-[1.02rem] leading-relaxed max-w-xl text-ink/85">
          Describe what is failing in your store &mdash; or what you are trying
          to build &mdash; and you get a written read of where the work actually
          sits.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block mt-8 font-mono text-[0.85rem] tracking-wide text-paper bg-ink px-6 py-3 hover:bg-cobalt transition-colors"
        >
          Start a project &rarr;
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
