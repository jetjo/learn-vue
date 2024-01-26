<template>
	<div style="border-bottom: 1px solid #000">
		<p>title: {{ state.title }}</p>
		<p>content: {{ state.content }}</p>
	</div>
</template>

<script setup>
	import { onMounted, reactive } from "#vue";
	const props = defineProps(["title", "content"]); //NOTE: 执行时机: Vue框架预处理阶段
	const state = reactive({
		title: props.title,
		content: props.content,
	});
</script>
