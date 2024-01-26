<template>
	<div>
		<!-- NOTE: 这样是可以改变状态,但是失去了响应性 -->
		<!-- 组件B: <button @click="increment">自增</button> -->
		组件B: <button @click="store.increment()">自增</button> 组件B:
		<button @click="incrementTest">自增</button>
	</div>
</template>

<script setup>
	import store from "./store";
	import { ref, toRefs } from "#vue";

	// // NOTE: 这样是可以改变状态,但是失去了响应性
	// const { increment } = (store);

	const { incrementTest } = store;
</script>
