<template>
  <div>
    <h3>
      <a href="https://aerotwist.com/blog/flip-your-animations/"
        >通过内建的&lt;Transition>组件实现“FLIP”列表过渡效果;</a
      >
    </h3>
    <button @click="insert">insert at random index</button>
    <button @click="reset">reset</button>
    <button @click="shuffle">shuffle(重新排序)</button>
    <TransitionGroup name="fade" class="container" tag="ul">
      <div v-for="item of items" :key="item" class="item">
        {{ item }} <button @click="remove(item)">x</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, readonly, computed } from "vue";
import { shuffle as _shuffle } from "lodash-es";

const getInitialItems = () => [1, 2, 3, 4, 5, 6, 7, 8];
const items = ref(getInitialItems());

const { insert, itemWillInsert } = (function () {
  let item = ref(items.value.length + 1);
  function insert() {
    // 要插入的元素的可选位置索引值最大是当前数组长度
    const i = Math.round(Math.random() * items.value.length);
    items.value.splice(i, 0, item.value++);
  }
  return { insert, itemWillInsert: readonly(item) };
})();

function reset() {
  items.value = getInitialItems();
}

function shuffle() {
  items.value = _shuffle(items.value);
}

function remove(item) {
  const i = items.value.indexOf(item);
  if (i > -1) {
    items.value.splice(i, 1);
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
/*确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画*/
.fade-leave-active {
  position: absolute;
}
// 对移动中的元素添加动画
.fade-move {
  transition: all 5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0.001;
  transform: scaleY(0.01) translate(30px, 0);
}
</style>

<style scoped>
.container {
  padding: 0;
}
.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}
</style>
