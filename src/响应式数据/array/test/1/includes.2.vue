<template>
	<div>
测试确认: 即使数组自定义的方法没有对数组做任何操作,即没有依赖数组的任何,只要这个自定义的方法被代理了,仍然像有依赖一样
	</div>
</template>

<script setup>
import { reactive, readonly, watchEffect } from "vue";

const raw = [{}, {}]
const state = reactive(raw)

raw.includes = (...items) => console.log(items);

watchEffect(() => {
	console.log(state.includes())
})

state[1] = 1
</script>

<style lang="scss" scoped>

</style>