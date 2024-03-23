<script lang="ts" setup>
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types'
const emit = defineEmits(['searching', 'searchSuccess', 'searchError']);
const cardStore = useMyCardStoreStore();
const querySchema = z.object({
  fname: z.string().min(1).max(99)
})

type QuerySchema = z.output<typeof querySchema>

const state = ref<QuerySchema>({
  fname: ''
});

async function submitSearch(event: FormSubmitEvent<QuerySchema>) {
  emit('searching')
  const params = new URLSearchParams(state.value);
  try {
    const searchResults = await $fetch<any>('/api/v7/cardinfo.php?' + params.toString());
    cardStore.cardList = searchResults.data;
    emit('searchSuccess');
  } catch (error : any) {
    if(error.data.statusCode == 400)
      emit('searchError', 400);
    else
      emit('searchError', 500);
  }
}



</script>

<template>
  <UForm :schema="querySchema" :state="state" @submit="submitSearch">
    <UFormGroup name="fname">
      <UInput size="xl" v-model="state.fname" placeholder="Blue-Eyes Chaos MAX Dragon"
        :ui="{ placeholder:'', icon: { trailing: { pointer: '' } } }">
        <template #trailing>
          <UButton type="submit" size="xl" icon="i-heroicons-magnifying-glass" :padded="false" variant="ghost" />
        </template>
      </UInput>
      <template #error></template>
    </UFormGroup>
  </UForm>
</template>