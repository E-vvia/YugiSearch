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
      <UCard
        :ui="{ base: 'w-full mt-4', body: { base: 'flex flex-col md:flex-row justify-center', padding: 'sm:p-1 p-1' } }">
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
        <div class="flex flex-row items-center" v-if="card.frameType == 'link'">
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
            <UTooltip :text="card.attribute == undefined ? card.frameType.toUpperCase() : card.attribute"
              :popper="{ arrow: true }">
              <img v-if="card.attribute" :src="'/attribute/' + card.attribute + '.png'">
              <img v-else :src="'/attribute/' + card.frameType + '.png'">
            </UTooltip>
          </div>
        </div>
      </UCard>
    </div>
    <div class="w-full">
      <UCard
        :ui="{ base: 'flex flex-col w-full h-full', header: { background: 'bg-sky-50 rounded-t-lg' }, body: { base: 'grow-[2] p-3 text-sm lg:text-base' } }">

        <!--Card data-->
        <template #header>
          <!--Card name-->
          <p class="font-bold text-base lg:text-2xl">{{ card.name }}</p>

          <!--Card types-->
          <div v-if="card.type.includes('Monster')" class="flex text-sm lg:text-base">
            <span>{{ card.race }}/</span>
            <span>{{ card.type.replace(' Monster', '').replaceAll(' ', '/') }}</span>
          </div>
        </template>

        <!--Card description-->
        <p class="whitespace-pre-line">{{ card.desc }}</p>

        <template #footer v-if="card.atk">
          <span><span class="font-medium">ATK:</span> {{ card.atk }}</span>
          <span v-if="card.def"><span class="font-medium"> DEF:</span> {{ card.def }}</span>
        </template>
      </UCard>
    </div>
  </div>
</template>