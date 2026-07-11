<template>
  <UCard
    class="border border-red-200 bg-red-50 text-red-700"
  >
    <div class="flex items-center gap-3">
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
        <UIcon
          name="i-lucide-x"
          class="h-5 w-5 text-red-600"
        />
      </div>

      <div>
        <p class="font-semibold">
          Error
        </p>
        <p class="text-sm">
          Server is unavailable at this time. Please try again later.
        </p>
      </div>
    </div>
  </UCard>
</template>