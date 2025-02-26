<template>
  <div
    ref="svgContainer"
    class="w-full h-full flex items-center justify-center"
  >
    <LoaderIcon />
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

import LoaderIcon from "../icons/loader.vue";

const svgContainer = ref(null);

onMounted(() => {
  if (svgContainer.value) {
    gsap.fromTo(
      svgContainer.value,
      {
        y: -500,
        rotation: 0,
        opacity: 0,
      },
      {
        y: 0,
        rotation: 360,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }
});
</script>

<style scoped></style>
