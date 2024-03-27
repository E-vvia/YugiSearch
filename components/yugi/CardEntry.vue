<script lang="ts" setup>
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="flex py-6 gap-x-4">
    <div class="py-1 flex flex-col justify-content items-center w-max-content">
      <YugiArtwork :name="card.name" :konamiId="card.misc_info[0].konami_id" />

      <!--Icons-->
      <div
        class="flex flex-col md:flex-row items-center justify-center mt-4 border-2 rounded p-1 md:min-w-32 md:max-w-full">
        <!--Pendulum Scales-->
        <div v-if="card.scale" class="flex items-center font-semibold m-1">
          <span>{{ card.scale }}</span>
          <UTooltip text="Pendulum scales" :popper="{ arrow: true }">
            <img alt="Pendulum scales" class="w-[40px]" src="/icon/Pendulum_Scales.png">
          </UTooltip>
        </div>

        <!--Level/Rank-->
        <div v-if="card.level && card.frameType != 'link'" class="flex items-center justify-center font-semibold m-1">
          <span>{{ card.level }}</span>
          <div class="w-[24px] flex items-center">
            <UTooltip :text="card.frameType == 'xyz' ? 'Rank' : 'Level'" :popper="{ arrow: true }">
              <img alt="Rank icon" v-if="card.frameType == 'xyz'" src="/icon/rank.png">
              <img alt="Level icon" v-else src="/icon/level.png">
            </UTooltip>
          </div>
        </div>

        <!--Spell/Trap Icon-->
        <div v-if="(card.frameType == 'spell' || card.frameType == 'trap') && card.race != 'Normal'"
          class="flex items-center font-semibold m-1">
          <UTooltip :text="card.race" :popper="{ arrow: true }">
            <img :alt="card.race" :src="'/icon/' + card.race + '.png'">
          </UTooltip>
        </div>

        <!--Link arrows-->
        <div class="flex flex-row " v-if="card.frameType == 'link'">
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

        <!--Attribute-->
        <div class="flex items-center justify-center m-1">
          <div class="w-[24px] flex items-center">
            <UTooltip :text="card.attribute == undefined ? card.frameType.toUpperCase() : card.attribute" :popper="{ arrow: true }">
              <img v-if="card.attribute" :src="'/attribute/' + card.attribute + '.png'">
              <img v-else :src="'/attribute/' + card.frameType + '.png'">
            </UTooltip>
          </div>
        </div>
      </div>
    </div>

    <div class="border-2 rounded-md w-full">

      <!--Card data-->
      <div class="border-b-2 p-3 border-gray-100 bg-sky-50 justify-between flex items-center">
        <div class="flex flex-col mr-0.5">

          <!--Card name-->
          <div>
            <p class="font-bold text-base lg:text-2xl">{{ card.name }}</p>
          </div>

          <!--Card types-->
          <div v-if="card.type.includes('Monster')" class="flex text-sm lg:text-base">
            <span class="max-w-fit" v-if="card.race">{{ card.race }}</span>
            <span v-if="card.frameType.includes('pendulum')">/Pendulum </span>
            <span v-if="card.frameType == 'ritual'">/Ritual</span>
            <span v-else-if="card.misc_info[0].has_effect">/Effect</span>
          </div>
        </div>
      </div>

      <!--Card description-->
      <div class="p-3 text-sm lg:text-base">
        <p class="whitespace-pre-line">{{ card.desc }}</p>
      </div>
    </div>
  </div>
</template>