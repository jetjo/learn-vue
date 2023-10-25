<template>
  <div>
    <!-- NOTE: 为了搭配第三方动画库使用,Transition组件支持自定义过渡class name   -->
    <!-- 本组件以与Animate.css库搭配使用为例 -->
    <button @click="vIFlag = !vIFlag">{{ vIFlag ? "隐藏" : "显示" }}</button>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada animate__slower"
      leave-active-class="animate__animated animate__bounceOutRight animate__faster"
    >
      <p v-if="vIFlag">自定义过渡class以配合Animate.css动画库使用</p>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const vIFlag = ref(false);
</script>

<style lang="scss" scoped></style>
