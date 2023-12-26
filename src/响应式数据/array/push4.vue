<template>
	<div></div>
</template>

<script setup>
	import { reactive, watchEffect as effect } from "vue";
	// import { reactive, effect, disableLog } from "../../../index.js";
	// disableLog('error');

	const raw = [];
	window.rawTest____= raw
	const state = reactive(raw);

	const _id1 = 1;
	effect(
		() => {
			const id = Math.random().toFixed(5).split(".")[1];
			console.log(`effect${_id1}: `, id, state.length);
			state.push("刘亦菲");
			// console.log(`effect${_id1}: `, id);
		},
		{ queueJob: false, flush: "sync", _id: _id1 },
	);
	const _id2 = 2;
	effect(
		() => {
			const id = Math.random().toFixed(5).split(".")[1];
			console.log(`effect${_id2}: `, id, state.length);
			// debugger
			// push分为两个基本操作,
			// 首先设置属性[length]为push的第一个参数,
			// 此时如果是同步操作,即flush为sync,
			// 则会引发第一个effect的执行,进而执行第一个effect里的push;
			// 导致数组长度已经为3,
			// 但是此时此push的第二步操作,即设置length为2的操作还没执行;
			// 等到执行第二步时,即设置length为2,但此时length已经是3了,
			// 这会导致错乱
			state.push("老婆");
			// console.log(`effect${_id2}: `, id);
		},
		{ queueJob: false, flush: "sync", _id: _id2 },
	);
</script>

<style lang="scss" scoped></style>
