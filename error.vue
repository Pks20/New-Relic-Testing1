<template>
  <div>
    {{ error.statusCode }}
  </div>
</template>
<script lang="ts" setup>
import type { NuxtError } from "#app";
const props=defineProps<{
  error: NuxtError;
}>();

useNuxtApp().$newRelic.api.log(String(props.error.message), {
    level:'ERROR'
});

</script>
