<script lang="ts" setup>
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types'
const route = useRoute();
const querySchema = z.object({
  query: z.string().min(1).max(99),
})

type QuerySchema = z.output<typeof querySchema>

const state = ref<QuerySchema>({
  query: route.query.query as string,
});

async function submitSearch(event: FormSubmitEvent<QuerySchema>) {
  await navigateTo({ path: '/cardSearch', query: state.value })
  }

onBeforeRouteUpdate(async (to, from) => {
  state.value.query = to.query.query as string;
});

</script>

<template>
  <UForm :schema="querySchema" :state="state" @submit="submitSearch">
    <UFormGroup name="fname">
      <UInput size="xl" v-model="state.query" placeholder="Blue-Eyes Chaos MAX Dragon"
        :ui="{ placeholder: '', icon: { trailing: { pointer: '' } } }">
        <template #trailing>
          <UButton type="submit" size="xl" icon="i-heroicons-magnifying-glass" :padded="false" variant="ghost" />
        </template>
      </UInput>
      <template #error></template>
    </UFormGroup>
  </UForm>
</template>