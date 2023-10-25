<template>
  <div>
    <Transition appear>
      <p>
        如果你想在某个节点初次渲染时应用一个过渡效果，你可以添加 appear prop：
      </p>
    </Transition>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.v-enter-active {
  transition: opacity 5s ease;
}

.v-enter-from {
  opacity: 0.001;
}
.v-enter-to {
  opacity: 1;
}
</style>
