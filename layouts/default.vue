<script lang="ts" setup>
import { storeToRefs } from 'pinia';
const stateStore = useMyStateStore();

const { pageEnd } = storeToRefs(stateStore);

function infiniteScroll() {
  pageEnd.value = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight;
};

onMounted(() => {
  window.addEventListener("scroll", infiniteScroll);
});

</script>
<template>
  <div class="flex flex-col min-h-lvh  bg-fixed bg-hexagon justify-between">
    <div class="p-5 md:p-20 ">
      <slot />
    </div>
    <footer>
      <div class="bg-white p-4 rounded-t-lg text-sm flex flex-col mx-3">
        <span>This site is a fansite and is not endorsed or affiliated by Konami Digital Entertainment, Inc. All cards
          images and content is copyrighted and property of Konami Digital Entertainment, Inc. </span>
        <span>Thanks to <NuxtLink target="_blank" class="underline text-blue-500 visited:text-purple-500"
            to="https://ygoprodeck.com/">YGPRODECK</NuxtLink> for providing card data, <NuxtLink target="_blank"
            class="underline text-blue-500 visited:text-purple-500" to="https://ygorganization.com/">YGOrganization
          </NuxtLink> for card artwork and <NuxtLink target="_blank"
            class="underline text-blue-500 visited:text-purple-500" to="https://yugipedia.com/">Yugipedia
          </NuxtLink> for card icons.</span>
      </div>
    </footer>
  </div>
</template>

<style>
.bg-hexagon {
  background-color: #075985;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230ea5e9' fill-opacity='0.19' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>