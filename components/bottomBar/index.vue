<template>
  <nav
    class="absolute w-full h-20 bottom-0 flex items-center justify-center gap-x-5 border-t custom-shadow bg-white dark:bg-black"
  >
    <Button
      class="h-11 w-[275px]"
      label="All"
      icon="pi pi-list"
      rounded
      :disabled="showAll"
      @click="handleChangeTab"
    />
    <Button
      class="h-11 w-[275px]"
      label="Favorites"
      icon="pi pi-star-fill"
      rounded
      :disabled="!showAll"
      @click="handleChangeTab"
    />
  </nav>
</template>

<script setup lang="ts">
interface BottomBarProps {
  tab: "all" | "favorites";
}

const router = useRouter();
const props = defineProps<BottomBarProps>();

const showAll = computed(() => props.tab === "all");

function handleChangeTab(): void {
  const queryParams = router.currentRoute.value.query;

  router.push({
    path: "",
    query: { ...queryParams, tab: showAll.value ? "favorites" : "all" },
  });
}
</script>

<style lang="scss" scoped></style>
