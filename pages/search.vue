<template>
  <div class="container">
    <SearchInput v-model="query" @search="onSubmitSearch" />
  </div>
  <BottomBar />
</template>

<script setup>
const router = useRouter();

const query = ref("");

const { $axios } = useNuxtApp();

async function onSubmitSearch() {
  const queryParams = { page: 0 };

  if (query.value) queryParams.query = query.value;

  router.push({ path: "/search", query: queryParams });
}

async function handleSearch() {
  try {
    const path = `pokemon${query.value ? "/".concat(query.value) : ""}`;
    const response = await $axios.get(path);
    console.log(response.data);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

watch(
  () => [router.currentRoute.value.query],
  async () => await handleSearch()
);

onMounted(async () => await handleSearch());
</script>
