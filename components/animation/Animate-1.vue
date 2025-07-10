<template>
  <div class="relative mx-auto h-64 w-64">
    <!-- Dial -->
    <div class="absolute inset-0 rounded-full border-4 border-gray-300"></div>

    <!-- Needle -->
    <div
      class="absolute bottom-1/2 left-1/2 h-32 w-1 origin-bottom bg-red-500 transition-transform duration-700 ease-in-out"
      :style="{ transform: `rotate(${needleRotation}deg)` }"
    ></div>

    <!-- Center dot -->
    <div class="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>

    <!-- Score display -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xl font-bold">
      Score: {{ creditScore }}
    </div>
  </div>
  <UButton @click="increase">increase</UButton>
    <UButton @click="decrease">decrease</UButton>
</template>

<script setup lang="ts">
const creditScore = ref(650);

const needleRotation = computed(() => {
  const minScore = 300;
  const maxScore = 900;
  const score = Math.min(Math.max(creditScore.value, minScore), maxScore);
  return ((score - minScore) / (maxScore - minScore)) * 180 - 90;
})

function increase() {
  const interval=  setInterval(()=>{
 creditScore.value++;
 if(creditScore.value>=900){
        clearInterval(interval);
    }
    },100);
}
function decrease() {
    const interval=  setInterval(()=>{
 creditScore.value--;
 if(creditScore.value<=300){
        clearInterval(interval);
    }
    },100);
}
</script>
