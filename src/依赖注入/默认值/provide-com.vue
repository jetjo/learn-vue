<template>
	<InjectCom />
</template>

<script setup>
	import { provide, ref } from "#vue";
	import InjectCom from "./inject-com.vue";
	const students = ref([
		{
			name: "shuchang",
			age: 18,
		},
		{
			name: "liuyifei",
			age: 19,
		},
	]);
	provide("students", students);
</script>
