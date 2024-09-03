<script setup>
const config = useRuntimeConfig();
if (window && !window.artworkFile) {
  window.artworkFile = await $fetch('https://artworks.ygoresources.com/manifest.json', {
    method: 'GET'
  });
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
