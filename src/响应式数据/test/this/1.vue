<template>
	<div></div>
</template>

<script setup>
	import { reactive, readonly, watchEffect as effect } from "vue";

	class MySet extends Set {
		constructor(...args) {
			super(...args);
			// this.has = super.has.bind(this);
			// this.has = (...args) => false;
			// this.add = (...args) => [...args, 'add']
			// this.delete = (...args) => [...args, 'delete']
		}
	}

	const raw = new MySet([1, 2, 3]);
	const state = reactive(raw);

	const addItem = readonly(reactive({}));

	effect(
		() => {
			console.log(state.has(addItem), "effect has");
		},
		{ flush: "sync" },
	);

	state.add(addItem);
	state.delete(addItem);
	// console.log(state.delete(1112222, 1111), 'delete')
	console.log(raw);
</script>

<style lang="scss" scoped></style>
