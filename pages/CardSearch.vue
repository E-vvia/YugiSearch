<script lang="ts" setup>
import type { QuerySchema } from '~/types/query';
import { storeToRefs } from 'pinia';
const route = useRoute();
const currentQuery = ref<QuerySchema>(route.query as QuerySchema);
const cardStore = useMyCardStore();
const stateStore = useMyStateStore();
const { paginated, hasCards } = storeToRefs(cardStore);
const { pageEnd } = storeToRefs(stateStore);
const { refresh, pending, status } = await useAsyncData('card-search', () => cardStore.fetchCards(currentQuery.value).then(() => true));
const limit = ref(10);

function divide() {
  return hasCards.value ? 'divide-y' : 'divide-y-0';
}

function padding() {
  return hasCards.value ? 'px-4 py-5 sm:p-6' : 'px-0 py-0 sm:p-0';
}

onBeforeRouteUpdate(async (to) => {
  currentQuery.value = to.query as QuerySchema;
  await refresh();
});

watch(pageEnd, (newPageEnd) => {
  if (newPageEnd && limit.value + 10 < cardStore.cardList.length) {
    limit.value += 10;
  }
});

</script>

<template>
  <div>
    <UCard :ui="{ header: { base: 'flex' }, divide: divide(), body: { padding: padding() } }">
      <template #header>
        <YugiSearch class="w-full" />
      </template>
      <ClientOnly>
        <template #fallback>
          <UProgress v-if="currentQuery.query" animation="carousel" />
        </template>
        <UProgress v-if="pending" animation="carousel" />
        <div class="card-entry" v-if="hasCards">
          <div :key="card.id" v-for="card in paginated(limit, 0)">
            <YugiCardEntry :card="card" />
          </div>
        </div>
        <div v-if="status == 'error' || (status == 'success' && !hasCards)"
          class="flex flex-col items-center justify-center p-4">
          <UIcon name="i-heroicons-exclamation-triangle" />
          <span>
            No results for query.
          </span>
        </div>
      </ClientOnly>
    </UCard>
  </div>
</template>