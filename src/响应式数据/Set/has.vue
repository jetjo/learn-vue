<template>
	<div>

	</div>
</template>

<script setup>
import { reactive, watchEffect as effect } from "vue";

const state = reactive(new Set([1, 2, 3]));
effect(() => {
	// NOTE: 测试has方法是只依赖于1的增删,还是依赖于任何增删
	console.log(state.has(1));
})

setTimeout(() => {
	console.log('添加5');
	state.add(5)
}, 0);

setTimeout(() => {
	console.log('删除1');
	state.delete(1)
}, 0);
</script>

<style lang="scss" scoped>

</style>