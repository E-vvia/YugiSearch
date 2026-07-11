<script setup lang="ts">
import type SearchQueryParams from '#shared/types/queryparams/search-queryparams'
import type CardInfoRequest from '#shared/types/ygpro/requests/cardinfo-request'
import SearchResult from '~/components/card/search-result.vue'
import type ElementSearchSchema from '~~/shared/types/schemas/element-search-schema'
import type Card from '~~/shared/types/ygpro/responses/card'

const route = useRoute()
const router = useRouter()

const query = ref<CardInfoRequest>({
    fname: (route.query as unknown as SearchQueryParams).q ?? ''
})

const offset = ref<number>(0);
const limit = ref<number>(10);

const { data, status, error, execute } = await useFetch<Card[]>('/api/card',
    {
        query,
        watch: false
    })

async function submitSearch(payload: ElementSearchSchema) {
    query.value = {
        fname: payload.searchValue
    }

    await execute()

    await router.replace({
        query: {
            q: payload.searchValue
        }
    })
}

function paginated(cards: Card[] | undefined) {
    return cards ? cards.slice(offset.value, limit.value) : [];
}

function infiniteScroll() {
    const pageEnd = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight;
    if (pageEnd) {
        limit.value += 10;
    }
};

onMounted(() => {
    window.addEventListener("scroll", infiniteScroll);
});

</script>

<template>
    <UCard>
        <template #header>
            <ElementSearch class="w-full" @do-search="submitSearch" :initial-value="query.fname" />
        </template>

        <UProgress animation="carousel" v-if="status === 'pending'" />

        <p v-if="(error?.statusCode ?? 0) >= 500">
            <ElementError />
        </p>


        <div v-else-if="(error?.statusCode ?? 0) >= 400 && (error?.statusCode ?? 0) < 500"
            class="flex flex-col items-center justify-center gap-3 py-8 text-center text-gray-500">
            <NuxtImg src="/images/mokey.png" alt="No results found" class="h-24 w-24" />

            <p class="text-lg font-medium text-gray-700">
                There are no results to display.
            </p>

            <p class="text-sm">
                Try something else!
            </p>
        </div>


        <div class="search-result">
            <template :key="card.id" v-for="card in paginated(data)">
                <SearchResult :card="card" />
            </template>
        </div>



    </UCard>
</template>