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
        class="flex flex-col w-[578px] gap-y-[10px] h-[80vh] overflow-y-auto pb-12 mt-5 scrollbar max-sm:w-[102%] max-sm:h-[75vh]"
      >
        <ListItem
          v-for="(item, index) in slotProps.items"
          :key="index"
          :item="item"
          @handleClick="(pokemon:PokemonItem) => (selectedPokemon = pokemon)"
        />
        <li
          v-show="items.length < total && currentTab !== 'favorites'"
          ref="observer"
          class="min-h-[60px] w-full flex justify-center items-center"
        >
          <i
            class="pi pi-spin pi-spinner text-[#F22539]"
            style="font-size: 2rem"
          />
        </li>
      </ul>
    </template>
    <template #empty>
      <div class="w-full h-[80vh] flex flex-col items-center">
        <h1 class="text-4xl font-bold mb-[10px] mt-[50px]">Uh-oh!</h1>
        <p class="font-medium text-xl text-[#5E5E5E] mb-6">
          You look lost on your journey!
        </p>
        <Button rounded label="Go back home" @click="$router.push('/')" />
      </div>
    </template>
  </DataView>
  <PokemonModal
    :url="selectedPokemon?.url ?? ''"
    @handleClose="selectedPokemon = null"
  />
</template>

<script setup lang="ts">
import type { ListProps } from "@/shared/types/list";
import type { PokemonItem } from "@/shared/types/pokemon";

const props = defineProps<ListProps>();

const selectedPokemon = ref<PokemonItem | null>();
const observer = ref<HTMLDivElement | null>(null);
let io: IntersectionObserver;

const options = {
  root: null,
  rootMargin: "10px",
  threshold: 0.8,
};

const callback: IntersectionObserverCallback = async ([entry]) => {
  if (entry.isIntersecting && props.items.length <= props.total) {
    await props.onLoadMoreItems();
  }
};

if (import.meta.client) {
  io = new IntersectionObserver(callback, options);
}

watch(observer, async () => {
  if (observer.value) {
    io.observe(observer.value);
  }
});

onUnmounted(() => {
  if (import.meta.client) io.disconnect();
});
</script>

<style scoped></style>
