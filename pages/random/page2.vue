<template>
    <h1>page2</h1>
    <UButton to="/random/page3">next page</UButton>
    <UButton to="/random/page1">previous page</UButton>
    <UCard class="mx-16">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore commodi aut ab qui nihil, sit fugit, voluptatibus vero alias reprehenderit ipsum sed doloremque cumque nam maxime unde. Enim, reprehenderit facere.
    </UCard>
</template>
<script lang="ts" setup>
useNuxtApp().$newRelic.api.noticeError('error in page2', {
    path:useRoute().fullPath
});
</script>
