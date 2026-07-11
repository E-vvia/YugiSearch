<script lang="ts" setup>
import type CardSearchResultProps from '#shared/types/props/card-search-result-props'
const props = defineProps<CardSearchResultProps>();
</script>

<template>
    <span><span class="font-medium">ATK:</span> {{ props.card.atk }}</span>
    <span v-if="props.card.def"><span class="font-medium">DEF:</span> {{ props.card.def }}</span>
</template>