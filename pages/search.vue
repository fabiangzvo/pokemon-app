<template>
  <div class="mx-auto w-full max-w-[570px] max-sm:px-8">
    <SearchInput v-model="query" :currentTab="currentTab" />
    <div class="flex justify-center">
      <List
        :items="results"
        :total="total"
        :currentTab="currentTab"
        :isLoading="isLoading"
        :onLoadMoreItems="onLoadMoreItems"
      />
    </div>
  </div>
  <BottomBar :tab="currentTab" />
</template>

<script setup lang="ts">
import type { Tab, ApiResponse, SearchPageState } from "@/shared/types/common";

const config = useRuntimeConfig();
const router = useRouter();

const { favorites } = useFavorites();

const state = reactive<SearchPageState>({
  currentTab: "all",
  isLoading: true,
  next: "",
  query: "",
  results: [],
  total: 0,
});

const { currentTab, isLoading, next, query, results, total } =
  toRefs<SearchPageState>(state);

/**
 * @function handleSearch
 *
 * @description This function checks if the given Pokemon item already exists in the favorites list.
 * If it exists, the item is removed from the list. If it does not exist, the item is added.
 *
 * @param {Pokemon} PokemonItem - The Pokemon item to be added or removed from favorites.
 * @returns {void}
 */
async function handleSearch(): Promise<void> {
  try {
    isLoading.value = true;

    if (currentTab.value === "favorites") {
      if (query.value) {
        const filtered = favorites.value.filter(
          (favorite) => favorite.name === query.value
        );

        total.value = filtered.length;
        results.value = filtered;
        next.value = "";

        return;
      }

      total.value = favorites.value.length;
      results.value = favorites.value;
      next.value = "";

      return;
    }

    const path = config.public.pokemonApiUrl.concat(
      query.value ? "/".concat(query.value) : ""
    );

    const response = await $fetch<ApiResponse>(path, { method: "GET" });
    if (response?.results) {
      total.value = response.count;
      results.value = response.results;
      next.value = response.next ?? "";
    }
  } catch (error) {
    console.error("Error getting data:", JSON.stringify(error));

    total.value = 0;
    results.value = [];
    next.value = "";
  }

  isLoading.value = false;
}

async function onLoadMoreItems(): Promise<void> {
  if (!next.value) return;

  try {
    isLoading.value = true;

    const response = await $fetch<ApiResponse>(next.value);
    if (response?.results) {
      total.value = response.count;
      results.value.push(...response.results);
      next.value = response.next ?? "";
    }
  } catch (e) {
    console.error("Error getting data:", e);
  }

  isLoading.value = false;
}

/**
 * @function executeSearch
 *
 * @description This function retrieves the query parameters from the current URL
 * and execute the search using the provided values.
 *
 * @returns {void}
 */
async function executeSearch() {
  query.value = router.currentRoute.value.query.query as string;
  currentTab.value = (router.currentRoute.value.query.tab ?? "all") as Tab;

  await handleSearch();
}

watch(
  () => [router.currentRoute.value.query, () => favorites.value],
  executeSearch
);

onMounted(executeSearch);
</script>
