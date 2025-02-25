<template>
  <li
    class="min-h-[60px] flex justify-between items-center px-5 w-full rounded-md bg-white dark:bg-black"
  >
    <p>{{ item.name }}</p>
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
    />
  </li>
</template>

<script setup lang="ts">
import type { PokemonItem } from "@/shared/types/pokemon";
import type {
  ListItemProps,
  handleFavoriteEmit,
} from "@/shared/types/listItem";

defineProps<ListItemProps>();
const emit = defineEmits<handleFavoriteEmit>();

const { favorites } = useFavorites();

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

    return;
  }
  //add pokemon in favorite list
  favorites.value.push(pokemon);
}
</script>

<style lang="scss" scoped></style>
