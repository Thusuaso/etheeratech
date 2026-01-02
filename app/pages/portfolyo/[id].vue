<script setup>
const route = useRoute();
const projects = useProjects();

// URL'deki ID'ye (örn: finans-yonetim-paneli) sahip projeyi bul
const project = computed(() => {
  return projects.find((p) => p.id === route.params.id);
});
</script>

<template>
  <div v-if="project" class="container mx-auto py-24 px-4">
    <NuxtLink
      to="/portfolyo"
      class="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition group"
    >
      <Icon
        name="heroicons:arrow-left"
        class="group-hover:-translate-x-1 transition"
      />
      Portfolyoya Dön
    </NuxtLink>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
      <div
        class="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-cyan-900/20 bg-slate-800"
      >
        <img
          :src="project.gif"
          class="w-full h-auto object-cover"
          alt="Proje Animasyon"
        />
      </div>

      <div>
        <h1
          class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          {{ project.title }}
        </h1>

        <p class="text-slate-300 text-lg leading-relaxed mb-8">
          {{ project.desc }}
        </p>

        <div class="mb-8">
          <h3
            class="text-cyan-400 font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2"
          >
            <Icon name="heroicons:cpu-chip" /> Kullanılan Teknolojiler
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
      </div>
    </div>

    <div
      v-if="project.images && project.images.length > 0"
      class="border-t border-slate-800 pt-16"
    >
      <h2
        class="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4"
      >
        Proje Görselleri
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
            alt="Proje Ekran Görüntüsü"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="min-h-[50vh] flex flex-col items-center justify-center text-center"
  >
    <Icon
      name="heroicons:exclamation-circle"
      class="text-6xl text-slate-600 mb-4"
    />
    <h2 class="text-2xl font-bold text-white mb-2">Proje Bulunamadı</h2>
    <p class="text-slate-400 mb-6">
      Aradığınız proje kaldırılmış veya linki değişmiş olabilir.
    </p>
    <NuxtLink
      to="/portfolyo"
      class="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition"
    >
      Listeye Dön
    </NuxtLink>
  </div>
</template>
