<template>
  <div>组合式函数</div>
  <div>Mouse position is at: {{ pos.x }}, {{ pos.y }}</div>
</template>

<script setup>
import { useMousePos } from "./use-mouse";
const { pos } = useMousePos();
</script>

<style lang="scss" scoped></style>
