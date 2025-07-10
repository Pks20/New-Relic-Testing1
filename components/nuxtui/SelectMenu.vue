<template>
  <USelectMenu
  v-model="selected"
  :search-input="{
      placeholder: 'Filter...',
      icon: 'i-lucide-search'
    }"
  :options 
  :searchable="true"
  show-create-option-when="always"
  creatable
  option-attribute="label"
  value-attribute="label"
  label="hello"
  class="w-1/5"
  size="lg"
  />
  <p class="mt-6">{{ selected }}</p>
</template>
<script setup lang="ts">
const options = ref([
  {
    label: 'Backlog'
  },
  {
    label: 'Todo'
  },
  {
    label: 'In Progress'
  },
  {
    label: 'Done'
  },
  {
    label: 'Backlog'
  },
  {
    label: 'Todo'
  },
  {
    label: 'In Progress'
  },
  {
    label: 'Done'
  },
  {
    label: 'Backlog'
  },
  {
    label: 'Todo'
  },
  {
    label: 'In Progress'
  },
  {
    label: 'Done'
  },
  {
    label: 'Backlog'
  },
  {
    label: 'Todo'
  },
  {
    label: 'In Progress'
  },
  {
    label: 'Done'
  },
  {
    label: 'Backlog'
  },
  {
    label: 'Todo'
  },
  {
    label: 'In Progress'
  },
  {
    label: 'Done'
  },
  {
    label: 'Backlog'
  },
  {
    label: 'Todo'
  },
  {
    label: 'In Progress'
  },
  {
    label: 'Done'
  },
  {
    label: 'Backlog'
  },
  {
    label: 'Todo'
  },
  {
    label: 'In Progress'
  },
  {
    label: 'Done'
  },
])
const selected = ref('In Progress');
</script>


