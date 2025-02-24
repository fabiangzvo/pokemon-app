<template>
  <div class="mx-auto w-full max-w-[570px]">
    <SearchInput v-model="query" @search="onSubmitSearch" />
    <div class="card flex justify-center">
      <List :items="results" :total="total" />
    </div>
  </div>
  <BottomBar :tab="currentTab" />
</template>

<script setup lang="ts">
import type { LocationQueryRaw } from "vue-router";

interface Response {
  results: [];
  total: number;
  next: string;
}

const config = useRuntimeConfig();
const router = useRouter();

const query = ref("");
const currentTab = ref("all");
const results = ref([]);
const total = ref(0);
const next = ref("");
const isLoading = ref(true);

function onSubmitSearch(): void {
  const queryParams: LocationQueryRaw = { page: 0, tab: currentTab.value };

  if (query.value) queryParams.query = query.value;

  router.push({ path: "/search", query: queryParams });
}

async function handleSearch(): Promise<void> {
  try {
    isLoading.value = true;
    const path = config.public.pokemonApiUrl.concat(
      query.value ? "/".concat(query.value) : ""
    );

    const response = await $fetch<Response>(path, { method: "GET" });
    if (response?.results) {
      total.value = response.total;
      results.value = response.results;
      next.value = response?.next ?? "";
    }
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }

  isLoading.value = false;
}

async function onLoad(): Promise<void> {
  if (!!next.value) return;

  try {
    isLoading.value = true;

    const response = await $fetch<Response>(next.value);

    if (response?.results) {
      total.value = response.total;
      results.value = response.results;
      next.value = response?.next ?? "";
    }
  } catch (e) {
    console.error("Error al obtener datos:", e);
  }

  isLoading.value = false;
}

watch(
  () => [router.currentRoute.value.query],
  async () => {
    query.value = router.currentRoute.value.query.query ?? "";
    currentTab.value = router.currentRoute.value.query.tab ?? "all";

    await handleSearch();
  }
);

onMounted(async () => await handleSearch());
</script>
