<template>
  <Button
    rounded
    class="h-11"
    label="Share to my friends"
    @click="copyToClipboard"
  />
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

import type { PokemonDetail } from "@/shared/types/pokemon";

const props = defineProps<{ pokemon: PokemonDetail }>();

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
    const pokemonString = objectToString(props.pokemon);

    navigator.clipboard.writeText(pokemonString);

    toast.success("Pokémon copied to clipboard");
  } catch (e) {
    console.error(e);
    toast.error("Failed to copy the Pokémon to the clipboard");
  }
}
</script>

<style lang="scss" scoped></style>
