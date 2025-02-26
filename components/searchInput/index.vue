<template>
  <IconField class="shadow-md mt-9">
    <InputIcon class="pi pi-search" />
    <InputText
      v-model="model"
      class="w-full"
      placeholder="Search"
      @keypress.enter="onSubmitSearch"
    />
  </IconField>
</template>

<script setup lang="ts">
import type { Tab } from "@/shared/types/common";

const router = useRouter();

const model = defineModel({ default: "" });
const props = defineProps<{ currentTab: Tab }>();

/**
 * @function onSubmitSearch
 *
 * @description This function updates the 'query' parameter for the '/search' route,
 * while preserving all other existing query parameters
 *
 * @returns {void}
 */
function onSubmitSearch(): void {
  const queryParams: Record<string, string | number> = {
    tab: props.currentTab,
  };

  if (model.value) queryParams.query = model.value;

  router.push({ path: "/search", query: queryParams });
}
</script>

<style scoped></style>
