<template>
	<div>组件A: {{ count }}</div>
</template>

<script setup>
	import store from "./store";
	import { ref, toRefs } from "#vue";

	const { count } = toRefs(store);
</script>
