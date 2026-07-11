<script lang="ts" setup>
import type CardSearchResultProps from '#shared/types/props/card-search-result-props'
const props = defineProps<CardSearchResultProps>();
</script>

<template>
    <div v-if="props.card.level && props.card.frameType != 'link'"
        class="flex items-center justify-center font-semibold">
        <span>{{ props.card.level }}</span>
        <div class="w-6 flex items-center">
            <NuxtImg alt="Rank icon" v-if="props.card.frameType == 'xyz'" src="/images/icon/rank.png" />
            <NuxtImg alt="Level icon" v-else src="/images/icon/level.png" />
        </div>
    </div>

    <div v-if="(props.card.frameType == 'spell' || props.card.frameType == 'trap') && props.card.race.toLowerCase() != 'normal'"
        class="flex items-center font-semibold">
        <NuxtImg :alt="props.card.race" :src="'/images/icon/' + props.card.race.toLowerCase() + '.png'" />
    </div>
</template>