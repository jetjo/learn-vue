<template>
	<div></div>
</template>

<script setup>
	import { readonly } from "vue";
	import { reactive, watchEffect as effect } from "vue";

	const raw = {};
	const state = reactive(raw);

	state.a = readonly(reactive({ a: 1 }));

	console.log(state.a, "state.a");
	console.log(raw.a, "raw.a");
</script>

<style lang="scss" scoped></style>
