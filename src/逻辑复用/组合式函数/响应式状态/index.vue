<template>
  <div>
    响应式状态传递
    <div><button @click="() => id++">更新数据</button></div>
    <div>
      {{ error ? error.message : JSON.stringify(data) }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import useFetch from "./use-fetch";
const id = ref(0);
const url = computed(
  () => `https://jsonplaceholder.typicode.com/users/${id.value}`
);

const { data, loading, error } = useFetch(url);
</script>

<style lang="scss" scoped></style>
