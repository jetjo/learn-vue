<template>
	<div>测试in操作符是否依赖于属性的值</div>
</template>

<script setup>
	import { reactive, watchEffect as effect } from "vue";
	const state = reactive({
		name: "刘亦菲",
	});

	effect(() => {
		// NOTE: 测试in操作符是否依赖于属性的值
		console.log("name" in state);
	});

	setTimeout(() => {
		state.name = "liuyifei";
		console.log("更改名称: ", state.name);
	}, 0);

	setTimeout(() => {
		console.log('添加一个与in操作符无关的属性');
		state.age = 18
	}, 0);
</script>

<style lang="scss" scoped></style>
