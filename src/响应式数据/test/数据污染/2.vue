<template>
	<div></div>
</template>

<script setup>
	import { shallowReadonly } from "vue";
import { readonly } from "vue";
	import { reactive, watchEffect as effect } from "vue";

	const raw = [];
	const state = reactive(raw);

	const item = shallowReadonly(reactive({ a: 1 }))
	// state.push(readonly(reactive({ a: 1 })));
	state.push(item);

	console.log(state[0], "state[0]");
	console.log(raw[0], "raw[0]");
</script>

<style lang="scss" scoped></style>
