<template>
    <div class="max-w-4xl mx-auto mt-10">
        <UCarousel v-slot="{ item }" autoplay infinite loop :items="items" class="w-full max-w-xs mx-auto">
        <img :src="item" width="320" height="320" class="rounded-lg">
        </UCarousel>
    </div>
</template>

<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>