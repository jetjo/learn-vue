<template>
  <div>
    <button @click="vIFlag = !vIFlag">{{ vIFlag ? "隐藏" : "显示" }}</button>
    <Transition mode="out-in">
      <!-- <Transition mode="in">没有这个取值 -->
      <p v-if="vIFlag">v-if</p>
      <p v-else>v-else</p>
    </Transition>
    <p>
      在之前的例子中，进入和离开的元素都是在同时开始动画的，因此我们不得不将它们设为
      position: absolute 以避免二者同时存在时出现的布局问题。
      然而，很多情况下这可能并不符合需求。我们可能想要先执行离开动画，然后在其完成之后再执行元素的进入动画。手动编排这样的动画是非常复杂的，好在我们可以通过向
      &lt;Transition> 传入一个 mode prop 来实现这个行为：
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const vIFlag = ref(false);
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0.001;
}
</style>
