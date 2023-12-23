<template>
	<div></div>
</template>

<script setup>
	import { ref, watch } from "vue";

	const name = ref("刘亦菲");

	watch(
		() => {
			// 第一次执行总是同步代码
			// 当`flush`设置为`sync`时,后续执行也是同步代码
			const nm = name.value;
			console.log("读取响应式数据:", nm);
			return nm;
		},
		(nm) => {
			// 当`immediate`为true时,第一次执行也是同步代码
			// 当`flush`设置为`sync`时,后续执行也是同步代码
			console.log("读取响应式数据后的回调: ", nm);
		},
		{
			// immediate: true,
			flush: "sync",
			// flush: "post",
			// flush: "pre",
		},
	);
	console.log("创建watcher后: ");
	name.value = "liuyifei";
	name.value = "萧蔷";
</script>

<style lang="scss" scoped></style>
