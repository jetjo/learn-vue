<template>
	<div></div>
</template>

<script setup>
	import { reactive, watchEffect as effect } from "vue";
	// import { reactive, effect, disableLog } from "../../../index.js";
	// disableLog('none');

	const raw = [];
	const state = reactive(raw);

	// const newItems = reactive({ value: [] });
	// effect(
	// 	() => {
	// 		// 这样, 调用push的effect与length已经失去联系了....
	// 		setTimeout(() => {
	// 			// effect(() => {
	// 			//copy本次push的参数
	// 			[...newItems.value].forEach((a) => {
	// 				state[state.length] = a;
	// 				console.log("state: ", raw);
	// 			});
	// 			// });
	// 		}, 0);
	// 	},
	// 	{
	// 		flush: "sync", //必须同步,否则多次push,只执行一次
	// 	},
	// );
	// raw.push = function (...args) {
	// // console.log("raw.push: ", args);
	// // return Array.prototype.push.apply(this, args)
	// // return Array.prototype.push.apply(raw, args)
	// // args.forEach(a => {
	// // 	state[state.length] = a
	// // })
	// // Promise.resolve().then(() => {
	// // 	console.log("raw.push: ", args);
	// // 	args.forEach((a) => {
	// // 		state[state.length] = a;
	// // 	});
	// // });
	// // setTimeout(() => {
	// // 	console.log("raw.push: ", args);
	// // 	args.forEach((a) => {
	// // 		state[state.length] = a;
	// // 	});
	// // }, 0);
	// // newItems.value = args;
	// // return raw.length; // !!!!NOTE: push要返回length
	// };
	const _id1 = 1;
	effect(
		() => {
			const id = Math.random().toFixed(5).split(".")[1];
			console.log(`effect${_id1}: `, id);
			state.push("刘亦菲");
			// console.log(raw.length);
			console.log(state.length, id);
		},
		{ queueJob: false, flush: "sync", _id: _id1 },
	);
	const _id2 = 2;
	effect(
		() => {
			const id = Math.random().toFixed(5).split(".")[1];
			console.log(`effect${_id2}: `, id);
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
			// console.log(raw.length);
			console.log(state.length, id);
		},
		{ queueJob: false, flush: "sync", _id: _id2 },
	);

	// effect(() => {
	// 	console.log(state.length);
	// });

	// setInterval(() => {
	// 	state.push("刘亦菲");
	// }, 1000);
</script>

<style lang="scss" scoped></style>
