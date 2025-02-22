<template>
  <div class="container">
    <SearchInput
      v-model="query"
      @search="router.push({ path: '/search', query: { query, page: 0 } })"
    />
  </div>
</template>

<script setup>
const router = useRouter();

const query = ref("");
</script>

<style lang="scss" scoped></style>
