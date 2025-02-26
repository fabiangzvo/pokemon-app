<template>
  <li
    class="min-h-[60px] flex justify-between items-center px-5 w-full rounded-md bg-white dark:bg-black"
  >
    <Button
      :label="item.name"
      variant="text"
      @click="emit('handleClick', item)"
    />
    <FavoriteButton :item="item" />
  </li>
</template>

<script setup lang="ts">
import type { ListItemProps, ListItemEmits } from "@/shared/types/listItem";

defineProps<ListItemProps>();
const emit = defineEmits<ListItemEmits>();
</script>

<style lang="scss" scoped></style>
