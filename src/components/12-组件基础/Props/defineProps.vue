<template>
	<div>
		<h1>defineProps</h1>
		<p>title: {{ state.title }}</p>
		<p>content: {{ state.content }}</p>
		<button @click="onClick">更改状态</button>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, reactive } from "#vue";
	onMounted(() => console.log("查看执行次序"));
	const props = defineProps(["title", "content"]); //NOTE: 执行时机: Vue框架预处理阶段
	console.log(props); // NOTE: 执行时机: 执行setup函数时
	const state = reactive({
		title: props.title,
		content: props.content,
	});
	console.log(state);
	function onClick() {
		state.title = "www";
		state.content = "google";
		console.log(props);
		console.log(state);
	}
</script>
