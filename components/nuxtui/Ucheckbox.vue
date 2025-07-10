<template>
    <div class="m-8 px-10 py-6">
        <p class="mb-2">({{ consent }})</p>
        <UCheckbox v-model="consent" label="Check me"/>
    </div>
</template>
<script lang="ts" setup>
const consent=ref(false);
</script>