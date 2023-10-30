<template>
  <div>
    <MouseTracker v-slot="{ x, y }">
      鼠标位置: [{{ x }}, {{ y }}]
    </MouseTracker>
  </div>
</template>

<script setup>
import MouseTracker from "./index.vue";
</script>

