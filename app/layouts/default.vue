<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col min-h-lvh bg-fixed bg-hexagon justify-between ">
        <div class="p-5 md:p-20">
            <UContainer>
                <slot />
            </UContainer>
        </div>
        <ElementFooter />
    </div>
</template>
<style>
.bg-hexagon {
    background-image: url("~/assets/images/background/light.svg");
}
</style>