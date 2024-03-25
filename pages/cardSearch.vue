<script lang="ts" setup>
const cardStore = useMyCardStore();
const searching = ref<boolean>();
const error = ref<boolean>();
const route = useRoute();

await cardStore.fetchCards(route.query);

function divide() {
  return cardStore.hasCards ? 'divide-y' : 'divide-y-0';
}

function padding() {
  return cardStore.hasCards ? 'px-4 py-5 sm:p-6' : 'px-0 py-0 sm:p-0';
}

onBeforeRouteUpdate(async (to, from) => {
  await cardStore.fetchCards(to.query);
});


</script>

<template>
  <div>
    <UCard :ui="{ header: { base: 'flex' }, divide: divide(), body: { padding: padding() } }">
      <template #header>
        <YugiSearch class="w-full" @search="searching = true" @search-success="searching = false"
          @search-error="() => { searching = false; error = true }" />
      </template>
      <div class="card-entry" v-if="cardStore.hasCards">
        <div :key="card.id" v-for="card in cardStore.paginated(10, 0)">
          <YugiCardEntry :card="card" />
        </div>
      </div>
    </UCard>
  </div>
</template>