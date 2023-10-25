<template>
  <ul>
    <li v-for="(student, index) in students" :key="index">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>
</template>

<script setup>
import { inject } from "vue";
const students = inject(
  "students",
  () => [
    {
      name: "柳如是",
      age: 18,
    },
    {
      name: "董小宛",
      age: 19,
    },
  ],
  true/* NOTE: Treat Default As Factory */
);
</script>

<style lang="scss" scoped></style>
