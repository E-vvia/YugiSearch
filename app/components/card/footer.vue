<script lang="ts" setup>
import type CardSearchResultProps from '#shared/types/props/card-search-result-props';

const props = defineProps<CardSearchResultProps>()

</script>
<template>
    <CardStats :card="props.card" />
</template>