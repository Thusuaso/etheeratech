<script setup>
import { systems } from "~/data/systems";
import { notes } from "~/data/notes";

useSeoMeta({
  title: "Shopify Systems for Material Brands",
  description:
    "Etheera Tech builds Shopify systems for brands shipping material — stone, tile, flooring, furniture. Live LTL freight rating, catalogue import pipelines, and product feed remediation. Denizli, Turkey.",
  ogTitle: "Etheera Tech — Shopify Systems for Material Brands",
  ogDescription:
    "Freight that rates in the cart. Catalogues that import clean at scale. Feeds that pass review.",
  ogImage: "/images/social-share.png",
  twitterCard: "summary_large_image",
});

const projects = useProjects();
const featured = computed(() => projects.slice(0, 3));

const latestNotes = computed(() => notes.slice(0, 3));
</script>

<template>
  <div class="pt-14">
    <!-- ── HERO ─────────────────────────────────────────────── -->
    <section class="mx-auto max-w-6xl px-5 pt-20 pb-6">
      <p class="label text-cobalt mb-8">
        Shopify operations &middot; Denizli, Turkey
      </p>

      <h1
        class="font-display font-semibold tracking-[-0.03em] leading-[0.98] text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] max-w-4xl text-balance"
      >
        Somebody has to make the catalogue work.
      </h1>

      <div class="grid lg:grid-cols-12 gap-8 mt-10">
        <p class="lg:col-span-7 text-lg leading-relaxed text-ink/85">
          We build Shopify systems for brands shipping material — stone, tile,
          flooring, furniture. Freight that rates live in the cart. Supplier
          catalogues that import clean at scale. Product feeds that pass review
          instead of sitting disapproved. The half of e-commerce nobody puts in
          a case study.
        </p>

        <div
          class="lg:col-span-4 lg:col-start-9 flex lg:justify-end items-start"
        >
          <NuxtLink
            to="/contact"
            class="font-mono text-[0.8rem] tracking-wide text-cobalt border-b border-cobalt pb-1 hover:text-ink hover:border-ink transition-colors"
          >
            Start a project &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── SIGNATURE: THE MANIFEST ──────────────────────────── -->
    <section class="mx-auto max-w-6xl px-5 mt-14">
      <div class="flex items-baseline justify-between mb-3">
        <p class="label">Currently running</p>
        <p class="label">{{ systems.length }} systems on the rack</p>
      </div>

      <div class="border-t border-ink">
        <!-- column heads -->
        <div
          class="hidden md:grid grid-cols-12 gap-4 py-2 border-b border-rule"
        >
          <span class="label col-span-1">N&deg;</span>
          <span class="label col-span-3">System</span>
          <span class="label col-span-5">What it does</span>
          <span class="label col-span-2">Layer</span>
          <span class="label col-span-1 text-right">Status</span>
        </div>

        <NuxtLink
          v-for="s in systems"
          :key="s.n"
          :to="`/systems#${s.slug}`"
          class="group grid md:grid-cols-12 gap-1 md:gap-4 py-4 border-b border-rule hover:bg-panel transition-colors"
        >
          <span class="font-mono text-[0.75rem] text-cobalt md:col-span-1">
            N&deg;{{ s.n }}
          </span>
          <span
            class="font-display font-semibold text-[1.05rem] tracking-tight md:col-span-3 group-hover:text-cobalt transition-colors"
          >
            {{ s.name }}
          </span>
          <span class="text-[0.95rem] text-ink/80 md:col-span-5">
            {{ s.line }}
          </span>
          <span class="font-mono text-[0.72rem] text-graphite md:col-span-2">
            {{ s.layer }}
          </span>
          <span
            class="font-mono text-[0.68rem] md:col-span-1 md:text-right"
            :class="s.status === 'live' ? 'text-cobalt' : 'text-oxide'"
          >
            {{ s.status }}
          </span>
        </NuxtLink>
      </div>

      <p class="mt-5 text-[0.95rem] text-graphite max-w-2xl">
        Each one came out of a real store with a real problem, then got kept and
        reused. Nothing here is a package you can buy off a pricing page.
      </p>
    </section>

    <!-- ── POSITION ─────────────────────────────────────────── -->
    <section class="mx-auto max-w-6xl px-5 mt-28">
      <p class="label mb-6">The position</p>
      <div class="grid lg:grid-cols-12 gap-8 border-t border-ink pt-8">
        <h2
          class="lg:col-span-6 font-display font-semibold text-[1.9rem] sm:text-[2.4rem] tracking-tight leading-[1.08]"
        >
          A slab is not a t&#8209;shirt.
        </h2>
        <div
          class="lg:col-span-6 space-y-4 text-[1.02rem] leading-relaxed text-ink/85"
        >
          <p>
            Themes and apps are written for products that weigh nothing, look
            identical, and ship in a box. Material breaks all three assumptions.
            A pallet of travertine has a freight class. Two tiles from the same
            lot are different colours. A $5 sample today is a $20,000 order
            twelve weeks from now, and nothing in a stock cart remembers that.
          </p>
          <p>
            We come from the material side first — natural stone export,
            wholesale tile, furniture import — and learned the Shopify half
            because the operation needed it. That order matters. Most agencies
            arrive with the platform and meet the material later.
          </p>
        </div>
      </div>
    </section>

    <!-- ── SELECTED WORK ────────────────────────────────────── -->
    <section class="mx-auto max-w-6xl px-5 mt-28">
      <div class="flex items-baseline justify-between mb-3">
        <p class="label">Selected work</p>
        <NuxtLink
          to="/portfolio"
          class="label text-cobalt hover:text-ink transition-colors"
        >
          All projects &rarr;
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-3 gap-px bg-rule border-t border-ink">
        <NuxtLink
          v-for="p in featured"
          :key="p.id"
          :to="`/portfolio/${p.id}`"
          class="group bg-paper hover:bg-panel transition-colors p-6 flex flex-col min-h-[11rem]"
        >
          <h3
            class="font-display font-semibold text-[1.05rem] tracking-tight leading-snug group-hover:text-cobalt transition-colors"
          >
            {{ p.title }}
          </h3>
          <p
            class="font-mono text-[0.7rem] text-graphite mt-auto pt-4 border-t border-rule"
          >
            {{ p.techStack.slice(0, 3).join(" · ") }}
          </p>
        </NuxtLink>
      </div>
    </section>

    <!-- ── FIELD NOTES ──────────────────────────────────────── -->
    <section class="mx-auto max-w-6xl px-5 mt-28">
      <div class="flex items-baseline justify-between mb-3">
        <p class="label">Field notes</p>
        <NuxtLink
          to="/notes"
          class="label text-cobalt hover:text-ink transition-colors"
        >
          All notes &rarr;
        </NuxtLink>
      </div>

      <div class="border-t border-ink">
        <NuxtLink
          v-for="note in latestNotes"
          :key="note.n"
          :to="`/notes/${note.slug}`"
          class="group grid md:grid-cols-12 gap-1 md:gap-4 py-5 border-b border-rule hover:bg-panel transition-colors"
        >
          <span class="font-mono text-[0.75rem] text-cobalt md:col-span-1">
            N&deg;{{ note.n }}
          </span>
          <h3
            class="md:col-span-7 font-display font-semibold text-[1.1rem] tracking-tight leading-snug group-hover:text-cobalt transition-colors"
          >
            {{ note.title }}
          </h3>
          <span class="font-mono text-[0.72rem] text-graphite md:col-span-3">
            {{ note.tags.join(" · ") }}
          </span>
          <span
            class="font-mono text-[0.72rem] text-graphite md:col-span-1 md:text-right"
          >
            {{ note.read }}
          </span>
        </NuxtLink>
      </div>

      <p class="mt-5 text-[0.95rem] text-graphite max-w-2xl">
        Working notes from inside the engagements — what broke, what we changed,
        and what we would do differently.
      </p>
    </section>

    <!-- ── CTA ──────────────────────────────────────────────── -->
    <section class="mx-auto max-w-6xl px-5 mt-28">
      <div class="border-t border-ink pt-10">
        <h2
          class="font-display font-semibold text-[2rem] sm:text-[2.8rem] tracking-tight leading-[1.05] max-w-2xl"
        >
          Tell us what is breaking.
        </h2>
        <p class="mt-5 text-[1.02rem] leading-relaxed max-w-xl text-ink/85">
          A store that will not rate freight, a catalogue that will not import,
          a feed sitting disapproved. Describe it and you get a written read of
          where it is failing and what we would build first &mdash; before any
          talk of scope or price.
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
