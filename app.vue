<script setup>
const config = useRuntimeConfig();

useHead({
  script: [
    {
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      'data-cf-beacon': JSON.stringify({ token: config.public.analyticsToken, spa: true }),
      tagPosition: 'bodyClose',
      defer: 'true'
    }
  ]
}, { mode: 'client' });

if (window) {
  window.artworkFile = await $fetch('https://artworks.ygorganization.com/manifest.json');
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>