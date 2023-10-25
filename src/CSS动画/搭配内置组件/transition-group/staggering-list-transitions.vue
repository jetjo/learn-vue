<template>
  <div>
    <h3>渐进延迟列表动画</h3>
    <input type="text" v-model="query" />
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li
        v-for="(item, index) of queriedList"
        :key="item.msg"
        :data-index="index"
      >
        {{ item.msg }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import gsap from "gsap";

const list = [
  { msg: "Bruce Lee" },
  { msg: "Jackie Chan" },
  { msg: "Chuck Norris" },
  { msg: "Jet Li" },
  { msg: "Kung Fury" },
];

const query = ref("");

const queriedList = computed(() =>
  list.filter((e) => e.msg.toLowerCase().includes(query.value))
);

function onBeforeEnter(el) {
  el.style.height = 0;
  el.style.opacity = 0.001;
}

function onEnter(el, shutdownTransition) {
  gsap.to(el, {
    height: "1.6em",
    opacity: 1,
    delay: el.dataset.index * 0.15,
    onComplete: shutdownTransition,
  });
}

function onLeave(el, shutdownTransition_Leave) {
  gsap.to(el, {
    height: 0,
    opacity: 0.001,
    delay: el.dataset.index * 0.15,
    onComplete: shutdownTransition_Leave,
  });
}
</script>

<style lang="scss" scoped></style>
