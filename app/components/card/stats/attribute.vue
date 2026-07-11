<script lang="ts" setup>
import type CardSearchResultProps from '#shared/types/props/card-search-result-props'
const props = defineProps<CardSearchResultProps>();
</script>

<template>
    <div class="w-6 flex items-center">
        <NuxtImg v-if="props.card.attribute"
            :src="'/images/attribute/' + props.card.attribute.toLowerCase() + '.png'" />
        <NuxtImg v-else :src="'/images/attribute/' + props.card.frameType.toLowerCase() + '.png'" />
    </div>
</template>