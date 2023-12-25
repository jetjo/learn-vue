<template>
	<div></div>
</template>

<script setup>
	// import { reactive } from './reactive/index.js'
	// import { effect } from './effect/index.js'
	import { reactive, watchEffect as effect } from "vue";

	const state1 = reactive([]);
	const state2 = reactive({});

	// setTimeout(() => {
	let i = 0;
	effect(
		() => {
			console.log(i);
			state1.push(i++);
			state1.length
		},

		{ flush: "pre" },
	);

	effect(
		() => {
			console.log(i);
			state1.push(i++);
			// state1.length
		},

		{ flush: "pre" },
	);
	// }, 5000)
</script>

<style lang="scss" scoped></style>
