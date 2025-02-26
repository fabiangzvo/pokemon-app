<template>
  <div class="mx-auto w-full max-w-[570px] max-sm:px-8 overflow-hidden">
    <SearchInput v-model="query" :currentTab="currentTab" />
    <div class="flex justify-center h-full">
      <Loader v-if="isLoading" />
      <List
        v-else
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
const route = useRoute();

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
      } else {
        total.value = favorites.value.length;
        results.value = favorites.value;
        next.value = "";
      }

      isLoading.value = false;

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
    const response = await $fetch<ApiResponse>(next.value);
    if (response?.results) {
      total.value = response.count;
      results.value.push(...response.results);
      next.value = response.next ?? "";
    }
  } catch (e) {
    console.error("Error getting data:", e);
  }
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
  query.value = route.query.query as string;
  currentTab.value = (route.query.tab ?? "all") as Tab;

  await handleSearch();
}

watch(() => route.query, executeSearch);
watch(favorites, async (newValue, oldValue) => {
  if (newValue.length !== oldValue.length && currentTab.value === "favorites")
    await executeSearch();
});

onMounted(executeSearch);
</script>
