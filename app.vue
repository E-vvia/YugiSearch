<script setup>
if(window){
  window.artworkFile = await $fetch('https://artworks.ygorganization.com/manifest.json');
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>