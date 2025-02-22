<template>
  <div class="w-full h-screen flex flex-col items-center">
    <Pikachu />
    <h1 class="font-bold text-2xl">Welcome to Pokédex</h1>
    <p class="text-lg font-medium text-gray-500">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <Button severity="danger" rounded @click="$router.push('/search')"
      >Get started</Button
    >
  </div>
</template>

<script setup>
import Pikachu from "@/components/icons/pikachu";
</script>

<style lang="scss" scoped></style>
