<script setup lang="ts">
import type ElementSearchSchema from '~~/shared/types/schemas/element-search-schema';
const router = useRouter();

function submitSearch(payload: ElementSearchSchema) {
    router.push({
        path: '/search',
        query: {
            q: payload.searchValue
        }
    })
}

</script>

<template>
    <UCard>
        <template #header>
            <h1 class="text-4xl md:text-6xl text-center font-syne">YugiSearch</h1>
        </template>
        <ElementSearch class="w-full" @do-search="submitSearch" />
    </UCard>
</template>