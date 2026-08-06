<script setup>
const links = [
  { name: "Systems", to: "/systems" },
  { name: "Work", to: "/portfolio" },
  { name: "Notes", to: "/notes" },
];

const open = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);

const year = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen bg-paper text-ink font-body flex flex-col">
    <!-- HEADER -->
    <header
      class="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-rule"
    >
      <div
        class="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="font-display font-semibold text-[0.95rem] tracking-tight"
        >
          Etheera<span class="text-cobalt">.</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-7">
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.to"
            class="label hover:text-ink transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="label text-cobalt border-b border-cobalt pb-0.5 hover:text-ink hover:border-ink transition-colors"
          >
            Start a project
          </NuxtLink>
        </nav>

        <button
          class="md:hidden label text-ink"
          :aria-expanded="open"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          {{ open ? "Close" : "Menu" }}
        </button>
      </div>

      <div v-if="open" class="md:hidden border-t border-rule bg-paper">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          class="block px-5 py-3 label border-b border-rule hover:text-ink"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink to="/contact" class="block px-5 py-3 label text-cobalt">
          Start a project
        </NuxtLink>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="border-t border-ink mt-24">
      <div class="mx-auto max-w-6xl px-5 py-14">
        <p
          class="font-display text-2xl md:text-3xl font-semibold tracking-tight max-w-lg leading-[1.15]"
        >
          Shopify systems for brands that ship material.
        </p>

        <div
          class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 pt-8 border-t border-rule"
        >
          <div>
            <p class="label mb-3">Pages</p>
            <ul class="space-y-2">
              <li v-for="link in links" :key="link.name">
                <NuxtLink
                  :to="link.to"
                  class="font-mono text-[0.8rem] hover:text-cobalt transition-colors"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="font-mono text-[0.8rem] hover:text-cobalt transition-colors"
                >
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <p class="label mb-3">Practice</p>
            <ul class="space-y-2 font-mono text-[0.8rem] text-graphite">
              <li>Freight &amp; shipping logic</li>
              <li>Catalogue pipelines</li>
              <li>Feed &amp; channel health</li>
              <li>Storefront development</li>
            </ul>
          </div>

          <div>
            <p class="label mb-3">Contact</p>
            <ul class="space-y-2 font-mono text-[0.8rem]">
              <li>
                <a
                  href="mailto:info@etheeratech.com"
                  class="hover:text-cobalt transition-colors"
                >
                  info@etheeratech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+905530257011"
                  class="hover:text-cobalt transition-colors"
                >
                  +90 553 025 70 11
                </a>
              </li>
              <li class="text-graphite">Denizli, Turkey</li>
            </ul>
          </div>

          <div>
            <p class="label mb-3">Elsewhere</p>
            <ul class="space-y-2 font-mono text-[0.8rem]">
              <li>
                <a
                  href="https://www.instagram.com/etheera.tech/"
                  target="_blank"
                  rel="noopener"
                  class="hover:text-cobalt transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="flex flex-wrap gap-x-6 gap-y-2 justify-between mt-12 pt-5 border-t border-rule label"
        >
          <span>&copy; {{ year }} Etheera Tech</span>
          <span>Denizli &middot; Remote</span>
        </div>
      </div>
    </footer>
  </div>
</template>
