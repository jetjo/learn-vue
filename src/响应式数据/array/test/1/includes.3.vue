<template>
	<div>
测试确认: 当自定义的includes返回false时,会导致includes被调用两次
;但是两次的this都是raw,不应该有一次的this是state吗???
	</div>
</template>

<script setup>
import { reactive, readonly, watchEffect } from "vue";

const raw = [{}, {}]

raw.includes = function () {
	console.log(this === raw);
	// NOTE: 返回false,导致includes被调用了两次,
	// 但是,,,为什么两次的this都是raw,
	// 不应该有一次的this是state吗???
	return false
}
const state = reactive(raw)

watchEffect(() => {
	console.log(state.includes(state[0]))
})

</script>

<style lang="scss" scoped>

</style>