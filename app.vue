<template>
  <main class="relative w-screen h-screen flex justify-center">
    <Button
      unstyled
      class="!absolute left-0 top-1 !rounded-l-none"
      pt:icon:style="font-size:1.3rem; font-weight:bold;"
      @click="toggleTheme"
      :icon="color.value !== 'dark' ? 'pi pi-moon' : 'pi pi-sun'"
    />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </main>
</template>
<script setup>
import "primeicons/primeicons.css";

const color = useColorMode();
function toggleTheme() {
  console.log(color.value);
  color.value = color.value === "light" ? "dark" : "light";
}
</script>
