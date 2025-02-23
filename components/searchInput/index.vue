<template>
  <IconField class="shadow-md mt-9">
    <InputIcon class="pi pi-search" />
    <InputText
      v-model="model"
      class="w-full"
      placeholder="Search"
      @keypress.enter="emit('search')"
    />
  </IconField>
</template>

<script setup lang="ts">
const model = defineModel({ default: "" });
const emit = defineEmits(["search"]);
</script>

<style scoped></style>
