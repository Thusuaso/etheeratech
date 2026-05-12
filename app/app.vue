<template>
  <NuxtLayout>
    <NuxtPage />
    <Toast position="bottom-right" />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Etheera Tech` : 'Etheera Tech | Building the Future'
  }
})
</script>