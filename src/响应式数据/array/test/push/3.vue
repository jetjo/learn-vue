<template>
	<div>

	</div>
</template>

<script setup>
import { reactive, watchEffect as effect } from "vue";

const raw = []
const state = reactive(raw)

effect(
  () => {
    // NOTE: 不合理的副作用,既依赖length又改变length
    state.length
    state.push(1)
    console.log('effect1: ', raw.length)
  },
  {
    flush: 'sync'
  }
)

effect(
  () => {
    state.length
    state.push(2)
    console.log('effect2: ', raw.length)
  },
  {
    flush: 'sync'
  }
)

</script>

<style lang="scss" scoped>

</style>