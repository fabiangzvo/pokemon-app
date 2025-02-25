<template>
  <li
    :key="index"
    class="min-h-[60px] flex justify-between items-center px-5 w-full rounded-md bg-white dark:bg-black"
  >
    <p>{{ item.name }}</p>
    <Button
      class="h-11 w-11 rounded-full flex justify-center items-center"
      icon="pi pi-star-fill"
      severity="secondary"
      aria-label="detail"
      pt:icon:style="font-size:26px;"
      :iconClass="isFavorite ? 'text-[#ECA539]' : ''"
    />
  </li>
</template>

<script setup lang="ts">
interface ListItemProps {
  item: PokemonItem;
  isFavorite: boolean;
}

defineProps<ListItemProps>();
</script>

<style lang="scss" scoped></style>
