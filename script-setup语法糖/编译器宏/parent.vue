<template>
	<div></div>
</template>

<script setup lang="ts">
	import { ref } from "#vue";

	import defineProps from "./defineProps.vue";

	const msg = ref<string>();
	const age = ref<number>();
	const isShow = ref<boolean>();
	const list = ref<string[]>();
	const obj = ref<object>();
	const fn = ref<(...args: any[]) => any>();
	const date = ref<Date>();
	const symbol = ref<symbol>();
	const promise = ref<Promise<any>>();
	const set = ref<Set<any>>();
	const map = ref<Map<any, any>>();
</script>

<style lang="scss" scoped></style>
