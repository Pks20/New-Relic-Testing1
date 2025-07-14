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

useNuxtApp().$newRelic.api.noticeError(String(props.error.message), {
    path:useRoute().fullPath
});

</script>
