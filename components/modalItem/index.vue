<template>
  <p class="w-full border-b py-[10px]">
    <span class="font-bold">{{ label }}</span
    >: {{ value }}
  </p>
</template>

<script setup lang="ts">
defineProps<{ value: any; label: string }>();
</script>

<style scoped></style>
