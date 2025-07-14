<template>
    <h1>page4</h1>
    <UButton to="/random/page5">next page</UButton>
    <UButton to="/random/page3">previous page</UButton>
    <UButton @click="callRelic">Click Me</UButton>
</template>
<script lang="ts" setup>
function callRelic(){
useNuxtApp().$newRelic.api.log('my log message', {level: 'INFO'});
}
</script>
