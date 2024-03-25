<script lang="ts" setup>
import type { LocationQuery } from 'vue-router';

const cardStore = useMyCardStore();
const searching = ref<boolean>();
const error = ref<boolean>();
const route = useRoute();
const fetching = ref<boolean>();
const fetchError = ref<boolean>();

await fetch(route.query);

async function fetch(query: LocationQuery) {
  fetching.value = true;
  fetchError.value = false;
  try {
    await cardStore.fetchCards(query);
  } catch (error: any) {
    fetchError.value = true;
  } finally {
    fetching.value = false;
  }
}

function divide() {
  return cardStore.hasCards ? 'divide-y' : 'divide-y-0';
}

function padding() {
  return cardStore.hasCards ? 'px-4 py-5 sm:p-6' : 'px-0 py-0 sm:p-0';
}

onBeforeRouteUpdate(async (to, from) => {
  await fetch(to.query)
});


</script>

<template>
  <div>
    <UCard :ui="{ header: { base: 'flex' }, divide: divide(), body: { padding: padding() } }">
      <template #header>
        <YugiSearch class="w-full" @search="searching = true" @search-success="searching = false"
          @search-error="() => { searching = false; error = true }" />
      </template>
      <div v-if="fetching">
        <UProgress animation="carousel" />
      </div>
      <div class="card-entry" v-else-if="cardStore.hasCards">
        <div :key="card.id" v-for="card in cardStore.paginated(10, 0)">
          <YugiCardEntry :card="card" />
        </div>
      </div>
      <div v-if="fetchError" class="flex flex-col items-center justify-center p-4">
        <UIcon name="i-heroicons-exclamation-triangle"/>
        <span>
          No results for query.
        </span>
      </div>
    </UCard>
  </div>
</template>