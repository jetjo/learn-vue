<template>
	<div></div>
</template>

<script setup>
	import { reactive, watchEffect } from "vue";

	const raw = ["foo", "bar"]
	// raw.copyWithin = function (...args) {
	// 	// console.log("raw.copyWithin: ", args);// 不必打印, 调到了
	// 	return Array.prototype.copyWithin.apply(this, args);
	// }
	const state = reactive(raw);

	// watchEffect(
	// 	() => {
	// 		console.log("effect1: state[0]: ", state[0]);
	// 	},
	// 	{ flush: "sync" },
	// );

	watchEffect(
		() => {
			console.log(`effect2: copyWithin(0, 1): `);
			// console.log(`effect2: copyWithin(0, 1): 看是否触发effect1: `);
			// state.copyWithin(0, 1);
			state.copyWithin(0, 1, 6);
		},
		{ flush: "sync" },
	);

	// setTimeout(() => {
	// 	console.log("改变state[1]的值, 看是否触发effect2: ");
	// 	state[1] = "bar2" + Math.random();
	// }, 0);
	setTimeout(() => {
		console.log(state);
		console.log("改变state[2]的值, 看是否触发effect2: ");
		state[2] = "bar2" + Math.random();
	}, 0);
	// setTimeout(() => {
	// 	console.log("改变state.length的值, 看是否触发effect2: ");
	// 	state.length = 10;
	// }, 0);

	setTimeout(() => {
		console.log(state);
	}, 10000);
</script>

<style lang="scss" scoped></style>
