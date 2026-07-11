<script lang="ts" setup>
import type CardSearchResultProps from '#shared/types/props/card-search-result-props'
const props = defineProps<CardSearchResultProps>();

</script>

<template>
    <div class="flex py-6 gap-x-4">
        <div class="py-1 flex flex-col justify-content items-center">
            <CardArtwork :card="props.card"/>
        </div>

        <div class="w-full">
            <UCard :ui="{
                root: 'flex flex-col w-full h-full',
                header: 'bg-sky-50 rounded-t-lg',
                body: 'grow-2 p-3 text-sm lg:text-base',
                footer: 'text-sm lg:text-base'
            }">
                <template #header>
                    <CardHeader :card="props.card" />
                </template>
                <p class="whitespace-pre-line">{{ card.desc }}</p>

                <template #footer>
                    <CardFooter :card="props.card"/>
                </template>
            </UCard>
        </div>
    </div>
</template>