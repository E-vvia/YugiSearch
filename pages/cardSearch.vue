<script lang="ts" setup>
const cardStore = useMyCardStoreStore();
const searching = ref<boolean>();
const error = ref<boolean>();

function divide() {
  return cardStore.hasCards ? 'divide-y' : 'divide-y-0';
}

function padding(){
  return cardStore.hasCards ? 'px-4 py-5 sm:p-6' : 'px-0 py-0 sm:p-0';
}
</script>

<template>
  <div>
    <UCard :ui="{ header: { base: 'flex' }, divide: divide(), body: { padding: padding()} }">
      <template #header>
        <YugiSearch class="w-full" @search="searching = true" @search-success="searching = false"
          @search-error="() => { searching = false; error = true }" />
      </template>
      <div v-if="cardStore.hasCards">
        <div v-for="card in cardStore.paginated(10, 0)">
          <p>{{ card.name }}</p>
        </div>
      </div>
    </UCard>

  </div>
</template>