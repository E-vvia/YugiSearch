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