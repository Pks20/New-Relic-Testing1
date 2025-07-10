<template>
  <div class="flex items-center space-x-4">
    <USkeleton class="size-60" :ui="{ rounded: 'rounded-full' }" />
    <div class="space-y-2">
      <USkeleton class="h-[116px] w-[250px]" />
      <USkeleton class="h-[116px] w-[200px]" />
    </div>
  </div>
</template>