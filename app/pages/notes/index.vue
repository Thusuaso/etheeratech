<script setup>
import { notes } from "~/data/notes";

useSeoMeta({
  title: "Field Notes",
  description:
    "Working notes from inside Shopify engagements — freight integration, catalogue imports at scale, Merchant Center remediation, and the failures that are worth writing down.",
  ogTitle: "Field Notes — Etheera Tech",
  ogDescription:
    "What broke, what we changed, and what we would do differently. Notes from inside the work.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="pt-14">
    <!-- MASTHEAD -->
    <section class="mx-auto max-w-6xl px-5 pt-20 pb-10">
      <p class="label text-cobalt mb-8">Field notes</p>

      <h1
        class="font-display font-semibold tracking-[-0.03em] leading-[1] text-[2.4rem] sm:text-[3.4rem] max-w-3xl text-balance"
      >
        From inside the work.
      </h1>

      <p class="mt-8 text-lg leading-relaxed max-w-2xl text-ink/85">
        Post-mortems and working drafts. What broke, what we changed, and what
        we would do differently &mdash; written while it was still fresh enough
        to be specific.
      </p>
    </section>

    <!-- LIST -->
    <section class="mx-auto max-w-6xl px-5">
      <div class="border-t border-ink">
        <NuxtLink
          v-for="note in notes"
          :key="note.n"
          :to="`/notes/${note.slug}`"
          class="group block border-b border-rule py-7 hover:bg-panel transition-colors"
        >
          <div class="grid lg:grid-cols-12 gap-3 lg:gap-8">
            <div class="lg:col-span-2">
              <p class="font-mono text-[0.75rem] text-cobalt">
                N&deg;{{ note.n }}
              </p>
              <p class="label mt-1">Filed {{ note.filed }}</p>
            </div>

            <div class="lg:col-span-7">
              <h2
                class="font-display font-semibold text-[1.3rem] sm:text-[1.55rem] tracking-tight leading-snug group-hover:text-cobalt transition-colors text-balance"
              >
                {{ note.title }}
              </h2>
              <p class="mt-3 text-[1rem] leading-relaxed text-ink/80">
                {{ note.dek }}
              </p>
            </div>

            <div class="lg:col-span-3 lg:text-right">
              <p class="font-mono text-[0.72rem] text-graphite">
                {{ note.tags.join(" · ") }}
              </p>
              <p class="font-mono text-[0.72rem] text-graphite mt-1">
                {{ note.read }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <p
        v-if="!notes.length"
        class="py-12 font-mono text-[0.85rem] text-graphite"
      >
        No notes filed yet.
      </p>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-6xl px-5 mt-20">
      <div class="border-t border-ink pt-10">
        <h2
          class="font-display font-semibold text-[1.9rem] sm:text-[2.6rem] tracking-tight leading-[1.05] max-w-2xl"
        >
          Hitting one of these yourself?
        </h2>
        <p class="mt-5 text-[1.02rem] leading-relaxed max-w-xl text-ink/85">
          Describe what is failing and you get a written read of where it is
          breaking &mdash; before any talk of scope or price.
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
