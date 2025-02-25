<template>
  <DataView
    layout="list"
    class="w-full"
    dataKey="url"
    unstyled
    :value="items"
    :total="total"
    :rows="20"
  >
    <template #list="slotProps">
      <ul
        class="flex flex-col w-[578px] gap-y-[10px] h-[80vh] overflow-y-auto pb-12 mt-5 scrollbar"
      >
        <ListItem
          v-for="(item, index) in slotProps.items"
          :key="index"
          :item="item"
        />
      </ul>
    </template>
  </DataView>
</template>

<script setup lang="ts">
interface ListProps {
  items: PokemonItem[];
  total: number;
  handleLoadMore?: () => Promise<void>;
}

defineProps<ListProps>();
</script>

<style scoped></style>
