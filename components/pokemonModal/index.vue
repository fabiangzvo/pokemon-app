<template>
  <Dialog
    modal
    class="h-auto !max-h-none w-[570px] max-sm:w-[315px] relative"
    pt:header:class="relative !p-0 h-[220px] bg-blue-500 rounded-t-xl"
    pt:content:class="!p-0"
    pt:footer:class="h-[84px] !px-[30px] !pb-0"
    pt:headerActions:class="absolute right-2 top-2"
    :visible="!!url"
    @update:visible="emit('handleClose')"
  >
    <div
      v-show="isLoading"
      class="absolute w-full h-full bg-white top-0 z-10 rounded-xl"
    >
      <Loader />
    </div>
    <template #header>
      <div
        class="h-full w-full flex justify-center items-center bg-[url(/background.png)] bg-cover rounded-t-xl"
      >
        <Image
          :src="pokemon?.sprites.other.dream_world.front_default"
          class="h-[180px] w-[180px]"
        />
      </div>
    </template>

    <div class="px-[30px]">
      <ModalItem label="Name" :value="pokemon?.name" />
      <ModalItem label="Weight" :value="pokemon?.weight" />
      <ModalItem label="Height" :value="pokemon?.height" />
      <ModalItem
        label="Types"
        :value="pokemon?.types.map((t) => t.type.name).join(', ')"
      />
    </div>
    <template #footer>
      <div class="w-full h-full flex items-center justify-between gap-2">
        <ClipboardButton :pokemon="pokemon!" />
        <FavoriteButton
          :item="{
            name: pokemon?.name ?? '',
            url: config.public.pokemonApiUrl.concat('/' + pokemon?.id),
          }"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { ModalProps, ModalEmits } from "@/shared/types/common";
import type { PokemonDetail } from "@/shared/types/pokemon";

const config = useRuntimeConfig();
const props = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();

const isLoading = ref<boolean>();
const pokemon = ref<PokemonDetail>();

onBeforeUpdate(async () => {
  try {
    if (!props.url) return;

    isLoading.value = true;

    const response = await $fetch<PokemonDetail>(props.url, { method: "GET" });
    if (response) pokemon.value = response;
  } catch (e) {
    console.error(e);
  }

  isLoading.value = false;
});
</script>

<style>
.p-dialog-close-button {
  position: absolute;
  height: 26px !important;
  width: 26px !important;
  background-color: white !important;
  border-radius: 2rem !important;
  stroke: #79c9f9;
  color: #79c9f9;
}
</style>
