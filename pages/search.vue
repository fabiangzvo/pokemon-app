<template>
  <div class="mx-auto w-full max-w-[570px]">
    <SearchInput v-model="query" :currentTab="currentTab" />
    <div class="card flex justify-center">
      <List :items="results" :total="total" :currentTab="currentTab" />
    </div>
  </div>
  <BottomBar :tab="currentTab" />
</template>

<script setup lang="ts">
import type { Tab, ApiResponse, SearchPageState } from "@/shared/types/common";

const config = useRuntimeConfig();
const router = useRouter();

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
    const path = config.public.pokemonApiUrl.concat(
      query.value ? "/".concat(query.value) : ""
    );

    const response = await $fetch<ApiResponse>(path, { method: "GET" });
    if (response?.results) {
      total.value = response.count;
      results.value = response.results;
      next.value = response?.next ?? "";
    }
  } catch (error) {
    console.error("Error getting data:", error);
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

  if (currentTab.value === "all") await handleSearch();
}

watch(() => [router.currentRoute.value.query], executeSearch);

onMounted(executeSearch);
</script>
