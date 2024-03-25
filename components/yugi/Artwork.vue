<script lang="ts" setup>
import manifestFile from '~/public/manifest.json';
const manifest = manifestFile as any;
const props = defineProps({
  konamiId: {
    type: Number,
    required: true
  }
});
const cardData = manifest.cards[props.konamiId];
const artId = Object.keys(cardData)[0];
const artworkData = cardData[artId];
const artworkPath = artworkData.bestArt;
const artworkURL = new URL(artworkPath, 'https://artworks.ygorganization.com/');

</script>

<template>
  <img :src="artworkURL.toString()" loading="lazy">
</template>

<style></style>