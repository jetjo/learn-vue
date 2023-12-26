<template>
	<div></div>
</template>

<script setup>
	import { reactive, watchEffect as effect } from "vue";
	// import { reactive, effect, disableLog } from "../../../../index.js";
	// disableLog('none');

	const raw = ["foo", "bar"];
	const state = reactive(raw);

	effect(() => {
		// console.log('effect1: 确定effect2是否改写了state[0]: ', state[0]); //改写了
		// console.log('effect1: 确定effect2是否改写了state[1]: ', state[1]); //没改写
	});

	effect(() => {
		console.warn(`effect2: copyWithin(0, 1, 6): `);
		state.copyWithin(0, 1, 6);
		console.log(raw);
	});

	console.log(
		"修改state[1]为(确定effect2是否依赖它): ",
		(state[1] = "bar" + (Math.random() + 2).toFixed(5)),
	); // 使用vue的api和导入的api, 都会触发effect2

	// console.log(
	// 	"修改state.length为(确定effect2是否依赖它): ",
	// 	(state.length = 3),
	// 	"state: ",
	// 	raw,
	// ); // 使用vue的api和导入的api, 都会触发effect2

	// setTimeout(() => {
	// 	delete state[0] //确认产生empty slot, delete操作不改变length
	// 	console.log(raw);
	// }, 0);
</script>

<style lang="scss" scoped></style>
```
