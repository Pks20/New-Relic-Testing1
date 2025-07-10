<template>
    <h1>{{ pickby }}</h1>
</template>
<script lang="ts" setup>
const lodashObj={
    mobile:9113361689,
    name:'Pradeep',
    customerId:18909080992209,
};

const pickby=usePick(lodashObj,['mobile','customerId']);
</script>