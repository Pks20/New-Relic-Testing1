<template>
  <!-- <h1 class="text-center bg-">hello</h1>
  <div>
    <UButton>Button</UButton>
  </div> -->

  <!-- <div class="flex items-center gap-4">
    <USkeleton class="h-12 w-12 animate-pulse rounded-[calc(var(--ui-radius)*1.5)] bg-(--ui-bg-elevated)" />

    <div class="grid gap-2">
      <USkeleton class="h-4 w-[250px]" />
      <USkeleton class="h-4 w-[200px]" />
    </div>
  </div> -->

  <!-- <div class="border m-10 p-5 flex gap-x-3.5 flex-col">
    <h1>hello</h1>
  <USeparator color="primary" type="solid" class="h-5"/>
  <p>hello</p>
  <div class="grid grid-cols-3 gap-3">
    <div v-for="n in 5" class="border border-collapse">
    hello
  </div>
  </div>
  </div> -->

  <!-- <div class="max-w-5xl mx-auto mt-10 grid grid-cols-2 place-content-center">
    <UInput color="error" v-model="value" />
  </div> -->
  <div class="flex justify-center mt-10">
    <NuxtuiSelectMenu />
    <UButton to="/skeleton">next page</UButton>
  </div>
  <!-- <div class="flex justify-center mt-10">
    <NuxtuiLodash />
  </div> -->
  <!-- <div class="flex justify-center mt-10">
    <NuxtuiSkeleton />
  </div> -->
   <!-- <div class="flex justify-center mt-10">
    <ImageRenderImageRotate />
  </div> -->
</template>
<script lang="ts" setup>
// const value = ref("");
</script>
