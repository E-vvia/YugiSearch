<script lang="ts" setup>
import manifestFile from '~/public/manifest.json';
const manifest = manifestFile as any;
const props = defineProps({
  konamiId: {
    type: [String, Number],
    required: false
  },
  name: {
    type: String,
    required: true
  }
});

const artworkUrl = ref<string>();

if (props.konamiId) {
  const cardData = manifest.cards[props.konamiId];
  if (cardData) {
    const keys = Object.keys(cardData);
    const artId = keys[0];
    const artworkData = cardData[artId];
    const artworkPath = artworkData.bestArt;
    artworkUrl.value = new URL(artworkPath, 'https://artworks.ygorganization.com/').toString();
  }
}

</script>

<template>
  <div class="w-16 h-24 lg:w-48 lg:h-72">
    <img :alt="name+' artwork'" v-if="artworkUrl" :src="artworkUrl" loading="lazy">
    <div v-else class="h-full w-full bg-sky-100 flex justify-center items-center">
      <span class="font-bold">
        No artwork available
      </span>
    </div>
  </div>
</template>

<style></style>