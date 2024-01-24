<template>
	<div></div>
</template>

<script setup>
	import { reactive, watchEffect } from "vue";

	class MySet extends Set {
		constructor(...args) {
			super(...args);
		}
		myHas(key) {
			return super.has(key);
		}
	}

	const raw = new MySet()
	const state = reactive(raw);

	watchEffect(() => {
		try {
			console.log(state.myHas(1), "state.myHas(1)");
		} catch (error) {
			console.error(error);
		}
	})

	state.add(1);
</script>

<style lang="scss" scoped></style>
