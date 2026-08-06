<script setup>
defineProps({
  n: { type: String, required: true },
  title: { type: String, required: true },
  fix: { type: String, default: "" },
});
</script>

<template>
  <section class="bg-panel border-l-2 border-cobalt p-6 my-8">
    <div class="flex items-baseline gap-3 mb-3">
      <span class="font-mono text-[0.7rem] text-cobalt shrink-0"
        >N&deg;{{ n }}</span
      >
      <h3
        class="font-display font-semibold text-[1.1rem] tracking-tight leading-snug"
      >
        {{ title }}
      </h3>
    </div>

    <div
      class="text-[1rem] leading-[1.7] text-ink/85 [&>p]:mb-3 [&>p:last-child]:mb-0"
    >
      <slot />
    </div>

    <p
      v-if="fix"
      class="mt-4 pt-4 border-t border-rule font-mono text-[0.83rem] leading-[1.65]"
    >
      <span class="text-[0.65rem] uppercase tracking-label text-oxide mr-3"
        >Fix</span
      >{{ fix }}
    </p>
  </section>
</template>
