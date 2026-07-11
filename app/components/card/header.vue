<script lang="ts" setup>
import type CardSearchResultProps from '#shared/types/props/card-search-result-props';

const props = defineProps<CardSearchResultProps>()

</script>

<template>
    <p class="font-bold text-base lg:text-2xl">{{ props.card.name }}</p>
    <div v-if="card.type.includes('Monster')" class="flex text-sm lg:text-base">
        <span>{{ card.race }}/</span>
        <span>{{ card.type.replace(' Monster', '').replaceAll(' ', '/') }}</span>
    </div>
</template>