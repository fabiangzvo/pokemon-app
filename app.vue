<template>
  <main class="relative w-screen h-screen flex justify-center">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Toaster richColors position="top-right" />
  </main>
</template>
<script setup lang="ts">
import "primeicons/primeicons.css";

import { Toaster } from "vue-sonner";
</script>
