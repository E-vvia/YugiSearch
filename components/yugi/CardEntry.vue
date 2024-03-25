<script lang="ts" setup>
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="flex py-6 gap-x-4 border-b-2 border-gray-100">
    <div class="py-1">
      <YugiArtwork v-if="card.misc_info[0].konami_id" :konamiId="card.misc_info[0].konami_id"
        class="max-w-16 lg:max-w-48" />
    </div>
    <div class="border-2 rounded-md w-full">
      <div class="border-b-2 p-3 border-gray-100 bg-sky-50 justify-between flex items-center">
        <div class="flex flex-col mr-0.5">
          <div>
            <p class="font-bold text-base lg:text-2xl">{{ card.name }}</p>
          </div>
          <div v-if="card.type.includes('Monster')" class="flex text-sm lg:text-base">
            <span class="max-w-fit" v-if="card.race">{{ card.race }}</span>
            <span v-if="card.scale">/Pendulum </span>
            <span v-else-if="card.misc_info[0].has_effect">/Effect</span>
          </div>
          <div class="flex flex-row" v-if="card.frameType == 'link'">
            <div v-for="arrow in card.linkmarkers">
              <UIcon name="i-heroicons-arrow-up" v-if="arrow == 'Top'" />
              <UIcon name="i-heroicons-arrow-up-right" v-if="arrow == 'Top-Right'" />
              <UIcon name="i-heroicons-arrow-right" v-if="arrow == 'Right'" />
              <UIcon name="i-heroicons-arrow-down-right" v-if="arrow == 'Bottom-Right'" />
              <UIcon name="i-heroicons-arrow-down" v-if="arrow == 'Bottom'" />
              <UIcon name="i-heroicons-arrow-down-left" v-if="arrow == 'Bottom-Left'" />
              <UIcon name="i-heroicons-arrow-left" v-if="arrow == 'Left'" />
              <UIcon name="i-heroicons-arrow-up-left" v-if="arrow == 'Top-Left'" />
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div v-if="card.level && card.frameType != 'link'" class="flex items-center font-semibold">
            <span>{{ card.level }}</span>
            <div class="h-6 w-6 lg:w-8 lg:h-8 flex">
              <img v-if="card.frameType == 'xyz'" src="/icon/rank.png">
              <img v-else src="/icon/level.png">
            </div>
          </div>
          <div v-else class="flex items-center font-semibold">
            <img :alt="card.race" :title="card.race" v-if="card.frameType == 'spell' || card.frameType == 'trap'"
              :src="'/icon/' + card.race + '.png'">
          </div>
          <div class="h-6 w-6 lg:w-8 lg:h-8">
            <img v-if="card.attribute" :src="'/attribute/' + card.attribute + '.png'">
            <img v-else :src="'/attribute/' + card.frameType + '.png'">
          </div>
        </div>
      </div>
      <div class="p-3 text-sm lg:text-base">
        <p>{{ card.desc }}</p>
      </div>
    </div>
  </div>
</template>