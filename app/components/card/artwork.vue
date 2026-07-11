<script lang="ts" setup>
import type CardSearchResultProps from '#shared/types/props/card-search-result-props';

const props = defineProps<CardSearchResultProps>()
</script>

<template>
    <div class="w-16 h-24 lg:w-full lg:h-full">
        <NuxtImg :alt="props.card.name + ' artwork'" v-if="props.card.card_images && props.card.card_images.length > 0"
            :src="props.card.card_images[0]?.image_url_small" />
        <div v-else class="h-full w-full bg-sky-100 flex justify-center items-center">
            <span class="font-bold">
                No artwork available
            </span>
        </div>
    </div>
</template>
