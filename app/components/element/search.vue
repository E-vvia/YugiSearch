<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import type ElementSearchSchema from '#shared/types/schemas/element-search-schema';
import type ElementSearchEmits from '#shared/types/emits/element-search-emits';
import type ElementSearchProps from '#shared/types/props/element-search-props';

const emits = defineEmits<ElementSearchEmits>();
const props = defineProps<ElementSearchProps>();
const state = ref({
    searchValue: props.initialValue
})

function search(event: FormSubmitEvent<ElementSearchSchema>){
    console.log(event.data.searchValue);
    emits('doSearch', event.data);
}

</script>

<template>
    <UForm class="w-full" :state="state" @submit="search">
        <UFormField name="searchValue">
            <UInput size="xl" placeholder="Ex: Blue-Eyes Chaos MAX Dragon" 
            v-model="state.searchValue"
            :ui="{
                root: 'w-full',
                trailing: 'pe-0 border-l border-solid border-neutral-300',
            }">
                <template #trailing>
                    <UButton type="submit" size="xl" icon="i-heroicons-magnifying-glass" variant="ghost" />
                </template>
            </UInput>
        </UFormField>
    </UForm>
</template>