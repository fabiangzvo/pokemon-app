import { type PokemonItem } from "@/shared/types/pokemon";

/**
 * @function useFavorites
 *
 * @description  This function allows to manage the favorite Pokémons.
 * It ensures that the list of favorites is stored in the browser's localStorage,
 * allowing the data to persist even after reloading the page or closing the browser.
 *
 * @returns {favorites}
 * */
export default function (): { favorites: Ref<PokemonItem[]> } {
  const isLoading = ref(true);
  const state = useState<PokemonItem[]>("favorites", () => []);

  function getFavorites(): void {
    isLoading.value = true;

    const storedValueStr: string = localStorage.getItem("favorites") ?? "[]";

    const storedValue = JSON.parse(storedValueStr) as PokemonItem[];
    if (storedValue.length > 0) {
      state.value = storedValue;
    }

    isLoading.value = false;
  }

  watch(
    state,
    (newValue) => {
      if (!import.meta.client) return;

      localStorage.setItem("favorites", JSON.stringify(newValue));

      if (newValue.length === 0) getFavorites();
    },
    { deep: true }
  );

  onMounted(() => {
    if (!import.meta.client) return;

    getFavorites();
  });

  return { favorites: state };
}
