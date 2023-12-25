<template>
	<div>

	</div>
</template>

<script setup>
// import { reactive } from './reactive/index.js'
// import { effect } from './effect/index.js'
import { reactive, watchEffect as effect } from "vue";

const state1 = reactive([])
const state2 = reactive({})

// setTimeout(() => {
let i = 0
effect(
  () => {
    state2.name
    // debugger
    state1.push(i++)
    console.log('副作用1')
  },
  // { queueJob: true }
  { flush: 'pre' }
)

effect(
  () => {
    state1.length
    // debugger
    state2.name = `liuyifei${i++}`
    console.log('副作用2')
  },
  // { queueJob: true }
  { flush: 'pre' }
)
// }, 5000)

// 最终结果:
// push.vue:32 [Vue warn]: Maximum recursive updates exceeded.
// This means you have a reactive effect that is mutating its own dependencies and
// thus recursively triggering itself.
// Possible sources include component template, render function, updated hook or watcher source function.

</script>

<style lang="scss" scoped>

</style>