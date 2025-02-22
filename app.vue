<template>
  <div class="relative">
    <Button
      class="!absolute left-0 top-1 !rounded-l-none bg-red-600"
      pt:icon:style="font-size:1.3rem; font-weight:bold;"
      @click="toggleTheme"
      :icon="color.value !== 'dark' ? 'pi pi-moon' : 'pi pi-sun'"
    />
    <NuxtRouteAnnouncer />
  </div>
</template>
<script setup>
import "primeicons/primeicons.css";

const color = useColorMode()
function toggleTheme() {
  console.log(color.value)
  color.value = color.value === "light" ? "dark" : "light";
}
</script>
