<script lang="ts" setup>

</script>

<template>
  <UContainer>

    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" CrossOrigin />
      <Link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet" />
    </Head>
    <UCard>
      <template #header>
        <h1 class="text-4xl md:text-6xl text-center font-syne">YugiSearch</h1>
      </template>
      <YugiSearch class="w-full" />
    </UCard>
  </UContainer>
</template>
