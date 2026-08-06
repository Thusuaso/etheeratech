<script setup>
defineProps({
  n: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  spec: { type: Array, required: true }, // [{ k, v }]
});
</script>

<template>
  <header>
    <nav class="label mb-8">
      <NuxtLink to="/notes" class="hover:text-cobalt transition-colors">
        Field Notes
      </NuxtLink>
      <span class="mx-2 text-rule">/</span>
      <span>N&deg;{{ n }}</span>
    </nav>

    <p class="label text-cobalt mb-5">{{ eyebrow }}</p>

    <h1
      class="font-display font-semibold tracking-[-0.03em] leading-[1.02] text-[2.1rem] sm:text-[2.9rem] text-balance"
    >
      {{ title }}
    </h1>

    <dl class="grid grid-cols-2 sm:grid-cols-4 border-t border-ink mt-9 mb-10">
      <div
        v-for="s in spec"
        :key="s.k"
        class="py-3 pr-4 border-b border-rule sm:border-b-0"
      >
        <dt class="label mb-1">{{ s.k }}</dt>
        <dd class="font-mono text-[0.78rem]">{{ s.v }}</dd>
      </div>
    </dl>
  </header>
</template>
