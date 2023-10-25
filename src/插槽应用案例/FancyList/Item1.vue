<template>
  <!-- <div> -->
  <FancyList>
    <template #item="{ name, age, score }">
      <!-- <div> -->
      <h1>{{ name }}</h1>
      <p>{{ age }}</p>
      <p>{{ score }}</p>
      <!-- </div> -->
    </template>
  </FancyList>
  <!-- </div> -->
</template>

<script setup>
import FancyList from "./index.vue";
</script>

<style lang="scss" scoped></style>
