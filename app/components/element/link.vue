<script setup lang="ts">
import type ElementLinkProps from '#shared/types/props/element-link-props';
const props = defineProps<ElementLinkProps>();
</script>

<template>
    <NuxtLink target="_blank" class="underline text-blue-500 visited:text-purple-500" :to="props.location">
        <slot />
    </NuxtLink>
</template>