<template>
	<ul>
		<li v-for="(student, index) in students" :key="index" data-test-inject>
			{{ student.name }} - {{ student.age }}
		</li>
	</ul>
</template>

<script setup>
import { inject } from "vue";
import { students as key } from "./keys";
const students = inject(key);
</script>

<style lang="scss" scoped></style>
