<template>
    <p class="mx-auto px-2 border py-1 w-32 shadow-[0_4px_4px_0_rgba(0,0,0,0.7)]">DefineModal</p>
    <UButton @click="changeValue">changeModelValue</UButton>
    <p>model value: {{ model }}</p>
</template>
<script lang="ts" setup>
const model=defineModel();
function changeValue() {
    model.value='changed value'
}
</script>