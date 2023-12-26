<template>
	<div>

	</div>
</template>

<script setup>
// import { reactive, watchEffect as effect } from "vue";
import { reactive, effect } from "../../../../index.js";
import { disableLog, createArray } from "../../../../index.js";
disableLog('error')

const raw = createArray(10)
window.rawTest__ = raw
const state = reactive(raw);

let i = 0
effect(() => {
	state.copyWithin(3, 4, 6)
	console.log('effect 1: ', raw[4], i++);
}, {flush: 'sync', queueJob: false})

effect(() => {
	state.copyWithin(2, 4, 7)
	console.log('effect 2: ', raw[4], i++);
}, {flush: 'sync', queueJob: false})
</script>

<style lang="scss" scoped>

</style>