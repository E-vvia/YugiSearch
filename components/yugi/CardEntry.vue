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
    <div class="py-1 flex flex-col justify-content items-center">
      <YugiArtwork :name="card.name" :konamiId="card.misc_info[0].konami_id" />
    </div>

    <div class="w-full">
      <UCard
        :ui="{ base: 'flex flex-col w-full h-full', header: { background: 'bg-sky-50 rounded-t-lg' }, body: { base: 'grow-[2] p-3 text-sm lg:text-base' }, footer: { base: 'text-sm lg:text-base' } }">

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

        <template #footer>
          <div>
            <div class="flex justify-center gap-x-3 my-1.5">
              <!--Attribute-->
              <div class="flex items-center justify-center m-1">
                <div class="w-[24px] flex items-center">
                  <img v-if="card.attribute" :src="'/attribute/' + card.attribute + '.png'">
                  <img v-else :src="'/attribute/' + card.frameType + '.png'">
                </div>
              </div>

              <!--Atk Def-->
              <div class="flex flex-col justify-center" v-if="card.atk">
                <span><span class="font-medium">ATK:</span> {{ card.atk }}</span>
                <span v-if="card.def"><span class="font-medium">DEF:</span> {{ card.def }}</span>
              </div>

              <!--Level/Spell-Trap-->
              <div class="flex justify-center flex-col">
                <!--Level/Rank-->
                <div v-if="card.level && card.frameType != 'link'"
                  class="flex items-center justify-center font-semibold">
                  <span>{{ card.level }}</span>
                  <div class="w-[24px] flex items-center">
                    <img alt="Rank icon" v-if="card.frameType == 'xyz'" src="/icon/Rank.png">
                    <img alt="Level icon" v-else src="/icon/Level.png">
                  </div>
                </div>

                <!--Spell/Trap Icon-->
                <div v-if="(card.frameType == 'spell' || card.frameType == 'trap') && card.race != 'Normal'"
                  class="flex items-center font-semibold">
                  <img :alt="card.race" :src="'/icon/' + card.race + '.png'">
                </div>
              </div>
            </div>

            <div class="flex justify-center">
              <div>
                <!--Pendulum Scales-->
                <div v-if="card.scale" class="flex items-center font-semibold">
                  <span>{{ card.scale }}</span>
                  <img alt="Pendulum scales" class="w-[40px]" src="/icon/Pendulum_Scales.png">
                </div>

                <!--Link arrows-->
                <div class="flex flex-row" v-if="card.frameType == 'link'">
                  <div class="flex items-center" v-for="arrow in card.linkmarkers">
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
            </div>
            
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>