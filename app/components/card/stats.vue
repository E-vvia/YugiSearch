<script setup lang="ts">
import type CardSearchResultProps from '#shared/types/props/card-search-result-props';

const props = defineProps<CardSearchResultProps>()

</script>
<template>
    <div class="flex justify-center gap-x-3 my-1.5">
        <div class="flex items-center justify-center m-1">
            <CardStatsAttribute :card="props.card" />
        </div>
        <div class="flex flex-col justify-center" v-if="props.card.atk">
            <CardStatsAtkDef :card="card" />
        </div>
        <div class="flex justify-center flex-col">
            <CardStatsLevelRace :card="card" />
        </div>
    </div>
</template>