<script setup>
const config = useRuntimeConfig();

useHead({
  script: [
    {
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      'data-cf-beacon': JSON.stringify({ token: config.analyticsToken, spa: true }),
      tagPosition: 'bodyClose',
      defer: 'true'
    }
  ]
});

if (window) {
  window.artworkFile = await $fetch('https://artworks.ygorganization.com/manifest.json');
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>