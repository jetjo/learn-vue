<!-- transition-js-hooks.vue -->
<template>
  <div class="switch-box">
    <button @click="vIFlag = !vIFlag">v-if、v-else过渡</button>
    <Transition css @leave="onLeave">
      <!-- NOTE: css属性必须是true,否则使用Transition组件还用啥意义 -->
      <!-- <Transition> -->
      <p class="switch-debounce" v-if="vIFlag">v-if</p>
      <p class="switch-debounce" v-else>v-else</p>
    </Transition>
    <div>
      在几个元素间切换的情况下,不该使用*-leave-to和*-leave-active这两个类
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const vIFlag = ref(false);
// 在元素被插入到 DOM 之前被调用
// 用这个来设置元素的 "enter-from" 状态
function onBeforeEnter(el) {}

// 在元素被插入到 DOM 之后的下一帧被调用
// 用这个来开始进入动画
function onEnter(el, shutdownTransition) {
  // 调用回调函数 shutdownTransition 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  // 开始动画、或者设置过渡的终点效果并开始过渡
  //...
  // 调用以结束动画或过渡
  // shutdownTransition();
}

// 当进入过渡完成时调用。
function onAfterEnter(el) {}

// 当进入过渡在完成之前被取消时调用
function onEnterCancelled(el) {}

// 在 leave 钩子之前调用
// 大多数时候，你应该只会用到 leave 钩子
function onBeforeLeave(el) {}

// 在离开过渡开始时调用
// 用这个来开始离开动画
// NOTE: 为防止切换时,后面的元素闪动,必须调用
function onLeave(el, shutdownTransition_Leave) {
  // 调用回调函数 shutdownTransition_Leave 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数

  // 开始动画、或者设置过渡的终点效果并开始过渡
  //...
  // 调用以结束动画或过渡,并移除或隐藏元素
  shutdownTransition_Leave();
}

// 在离开过渡完成、
// 且元素已从 DOM 中移除时调用
function onAfterLeave(el) {}

// 仅在 v-show 过渡中可用
function onLeaveCancelled(el) {}
</script>

<style lang="scss" scoped>
.v-enter-active
//,.v-leave-active
{
  transition: opacity 5s ease;
}

.v-enter-from
// ,.v-leave-to
{
  opacity: 0;
}
</style>
