<template>
  <Dialog
    modal
    class="h-auto !max-h-none w-[570px] max-sm:w-[315px]"
    pt:header:class="relative !p-0 h-[220px] bg-blue-500 rounded-t-xl"
    pt:content:class="!p-0"
    pt:footer:class="h-[84px] !px-[30px] !pb-0"
    pt:headerActions:class="absolute right-2 top-2"
    :visible="!!url"
    @update:visible="emit('handleClose')"
  >
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
        <Button
          rounded
          class="h-11"
          label="Share to my friends"
          @click="copyToClipboard"
        />
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

/**
 * @function objectToString
 * @description converts an object into a string with key-value pairs separated by commas
 *
 * @param {Record<string, any>} obj object to be converted into a string
 * @param {string} parentKey prefix to indicate the parent key when processing nested objects or arrays
 *
 * @returns {string} string with all key-value pairs from the input object separated by commas
 *
 */
function objectToString(
  obj: Record<string, any>,
  parentKey: string = ""
): string {
  return Object.entries(obj)
    .flatMap(([key, value]) => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
      ) {
        // if is object
        return objectToString(value, fullKey);
      } else if (Array.isArray(value)) {
        // if is array
        return value.flatMap((item, index) =>
          objectToString(item, `${fullKey}[${index}]`)
        );
      } else {
        // simple value
        return [`${fullKey}:${value}`];
      }
    })
    .join(",");
}

function copyToClipboard(): void {
  try {
    const props = objectToString(pokemon.value!);

    navigator.clipboard.writeText(props);
  } catch (e) {
    console.error(e);
  }
}

onBeforeUpdate(async () => {
  try {
    if (!props.url) return;

    isLoading.value = true;

    const response = await $fetch<PokemonDetail>(props.url, { method: "GET" });
    if (response) pokemon.value = response;

    console.log(response);
  } catch (e) {
    console.error(e);
  }

  isLoading.value = true;
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
