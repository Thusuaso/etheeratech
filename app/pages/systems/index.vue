<script setup>
import { systems } from "~/data/systems";

useSeoMeta({
  title: "Systems",
  description:
    "The rack: freight rating, catalogue pipelines, feed remediation, filter builders, index control, multi-store operations, and price monitoring — Shopify systems built inside real engagements.",
  ogTitle: "Systems — Etheera Tech",
  ogDescription:
    "Seven Shopify systems built inside real engagements with brands shipping material.",
  twitterCard: "summary_large_image",
});

const live = computed(() => systems.filter((s) => s.status === "live").length);
</script>

<template>
  <div class="pt-14">
    <!-- MASTHEAD -->
    <section class="mx-auto max-w-6xl px-5 pt-20 pb-10">
      <p class="label text-cobalt mb-8">The rack</p>

      <h1
        class="font-display font-semibold tracking-[-0.03em] leading-[1] text-[2.4rem] sm:text-[3.4rem] max-w-3xl text-balance"
      >
        Patterns that kept coming back, built once and kept.
      </h1>

      <p class="mt-8 text-lg leading-relaxed max-w-2xl text-ink/85">
        The same problems return across stores: freight that will not rate, a
        supplier catalogue with no export, a feed sitting disapproved. Each fix
        got built inside a real engagement, named, and put on the rack &mdash;
        so the next store gets it assembled instead of rebuilt.
      </p>

      <dl class="grid grid-cols-2 sm:grid-cols-4 border-t border-ink mt-10">
        <div class="py-3 pr-4 border-b border-rule sm:border-b-0">
          <dt class="label mb-1">On the rack</dt>
          <dd class="font-mono text-[0.85rem]">{{ systems.length }} systems</dd>
        </div>
        <div class="py-3 pr-4 border-b border-rule sm:border-b-0">
          <dt class="label mb-1">In production</dt>
          <dd class="font-mono text-[0.85rem]">{{ live }} live</dd>
        </div>
        <div class="py-3 pr-4">
          <dt class="label mb-1">Sector</dt>
          <dd class="font-mono text-[0.85rem]">Material brands</dd>
        </div>
        <div class="py-3 pr-4">
          <dt class="label mb-1">Off-the-shelf parts</dt>
          <dd class="font-mono text-[0.85rem]">None</dd>
        </div>
      </dl>
    </section>

    <!-- THE RACK -->
    <section class="mx-auto max-w-6xl px-5">
      <article
        v-for="s in systems"
        :id="s.slug"
        :key="s.n"
        class="border-t border-ink pt-6 pb-12 scroll-mt-20"
      >
        <div class="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <!-- left rail -->
          <div class="lg:col-span-3">
            <p class="font-mono text-[0.75rem] text-cobalt mb-2">
              N&deg;{{ s.n }}
            </p>
            <h2
              class="font-display font-semibold text-[1.5rem] tracking-tight leading-tight"
            >
              {{ s.name }}
            </h2>
            <p class="label mt-3">{{ s.layer }} layer</p>
            <p
              class="font-mono text-[0.7rem] mt-1"
              :class="s.status === 'live' ? 'text-cobalt' : 'text-oxide'"
            >
              {{ s.status }}
            </p>
          </div>

          <!-- body -->
          <div class="lg:col-span-6">
            <p
              class="font-display text-[1.15rem] font-medium tracking-tight leading-snug mb-4"
            >
              {{ s.line }}
            </p>
            <p class="text-[1.02rem] leading-relaxed text-ink/85">
              {{ s.body }}
            </p>
          </div>

          <!-- spec panel -->
          <div class="lg:col-span-3">
            <div class="bg-panel p-4 border-l-2 border-cobalt">
              <p class="label mb-2">Scope</p>
              <p class="font-mono text-[0.78rem] leading-relaxed mb-4">
                {{ s.scope }}
              </p>
              <p class="label mb-2">Stack</p>
              <ul class="space-y-1">
                <li
                  v-for="t in s.stack"
                  :key="t"
                  class="font-mono text-[0.72rem] text-graphite"
                >
                  {{ t }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-6xl px-5 mt-8">
      <div class="border-t border-ink pt-10">
        <h2
          class="font-display font-semibold text-[1.9rem] sm:text-[2.6rem] tracking-tight leading-[1.05] max-w-2xl"
        >
          None of these ship alone.
        </h2>
        <p class="mt-5 text-[1.02rem] leading-relaxed max-w-xl text-ink/85">
          A system arrives assembled into an engagement, not sold as a plugin.
          Tell us which part of your operation is failing and we will say which
          of these applies &mdash; or that none of them do.
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
