<template>
  <slot v-bind="pos"></slot>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from "vue";
import { debounce } from "lodash-es";
const pos = reactive({
  x: 0,
  y: 0,
});
/** @param {MouseEvent} e  */
function onMouseMove(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}
/* window.addEventListener(
  "mousemove",
  debounce((e) => {
    onMouseMove(e);
  }, 30)
); */
(function (handler) {
  const target = window;
  const event = "mousemove";
  onMounted(() => {
    target.addEventListener(event, handler);
  });
  onUnmounted(() => {
    target.removeEventListener(event, handler);
  });
})(
  debounce((e) => {
    onMouseMove(e);
  }, 30)
);
</script>
