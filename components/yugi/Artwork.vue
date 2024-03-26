<script lang="ts" setup>
import manifestFile from '~/public/manifest.json';
const manifest = manifestFile as any;
const props = defineProps({
  konamiId: {
    type: Number,
    required: true
  }
});
const artworkUrl = ref<string>();

const cardData = manifest.cards[props.konamiId];
if (cardData) {
  const keys = Object.keys(cardData);
  const artId = keys[0];
  const artworkData = cardData[artId];
  const artworkPath = artworkData.bestArt;
  artworkUrl.value = new URL(artworkPath, 'https://artworks.ygorganization.com/').toString();
}

</script>

<template>
  <img :src="artworkUrl" loading="lazy">
</template>

<style></style>