<script lang="ts" setup>
const props = defineProps(['card']);
</script>

<template>
  <div class="flex py-6 gap-x-4 border-b-2 border-gray-100">
    <div class="py-1">
      <YugiArtwork v-if="card.misc_info[0].konami_id" :konamiId="card.misc_info[0].konami_id"
        class="max-w-16 lg:max-w-48" />
    </div>
    <div class="border-2 rounded-md w-full">
      <div class="border-b-2 p-3 border-gray-100 bg-sky-50 flex items-center">
        <p class="font-bold text-sm lg:text-2xl w-full">{{ card.name }}</p>
        <div class="flex w-full justify-end gap-x-1">
          <div v-if="card.level" class="flex items-center font-semibold flex-end gap-x-1">
            <p>{{ card.level }}</p>
            <img v-if="card.frameType == 'xyz'" class="max-h-6 lg:max-h-8" src="/icon/rank.png">
            <img v-else class="max-h-6 lg:max-h-8" src="/icon/level.png">
          </div>
          <div class="h-6 lg:h-8 flex">
            <img v-if="card.attribute" :src="'/attribute/' + card.attribute + '.png'">
            <img v-else :src="'/attribute/' + card.frameType + '.png'">
          </div>
        </div>
      </div>
      <div class="p-3">
        <p>{{ card.desc }}</p>
      </div>
    </div>
  </div>
</template>