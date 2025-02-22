<template>
  <InputGroup class="shadow-md h-14 rounded-xl bg-white dark:bg-black/30">
    <InputGroupAddon
      unstyled
      class="pr-4 h-full flex items-center justify-center"
    >
      <Button
        class="w-full h-full active:!bg-transparent hover:!bg-transparent pl-4 text-gray-500"
        icon="pi pi-search"
        severity="primary"
        variant="text"
        @click="emit('search')"
      />
    </InputGroupAddon>
    <InputText
      unstyled
      class="w-full pl-6 focus-visible:outline-none"
      placeholder="Buscar imágenes..."
      v-model="model"
      @keypress.enter="emit('search')"
    />
  </InputGroup>
</template>

<script setup lang="ts">
const model = defineModel({ default: "" });
const emit = defineEmits(["search"]);
</script>

<style scoped></style>
