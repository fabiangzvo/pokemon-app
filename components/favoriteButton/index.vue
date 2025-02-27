<template>
  <Button
    class="h-11 w-11 rounded-full flex justify-center items-center"
    icon="pi pi-star-fill"
    severity="secondary"
    aria-label="detail"
    pt:icon:style="font-size:26px;"
    :iconClass="
      favorites.some((favorite) => favorite.name === item.name)
        ? 'text-[#ECA539]'
        : ''
    "
    @click="handleFavorite(item)"
    rounded
  />
</template>

<script setup lang="ts">
import type { PokemonItem } from "@/shared/types/pokemon";
import type { FavoriteButtonProps } from "@/shared/types/common";
import { toast } from "vue-sonner";

const { favorites } = useFavorites();

defineProps<FavoriteButtonProps>();

/**
 * @function handleFavorite
 *
 * @description This function checks if the given Pokemon item already exists in the favorites list.
 * If it exists, the item is removed from the list. If it does not exist, the item is added.
 *
 * @param {Pokemon} PokemonItem - The Pokemon item to be added or removed from favorites.
 * @returns {void}
 */
function handleFavorite(pokemon: PokemonItem): void {
  const exists = favorites.value.some(
    (favorite) => favorite.name === pokemon.name
  );

  if (exists) {
    //remove pokemon
    favorites.value = favorites.value.filter(
      (favorite) => favorite.name !== pokemon.name
    );

    toast.success("pokemon removed from favorites");

    return;
  }

  toast.success("pokemon added to favorites");
  //add pokemon in favorite list
  favorites.value.push(pokemon);
}
</script>

<style scoped></style>
