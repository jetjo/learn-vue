<template>
	<ul>
		<li v-for="(item, index) in studens" :key="index">
			<slot name="item" v-bind="item">{{ item.name }}</slot>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";
const studens = ref([
	{ name: "shuchang", age: 18, score: 120 },
	{ name: "liuyifei", age: 17, score: 121 },
]);

function notTested(params) {
	console.log('未被测试涵盖的方法');
}
</script>

<style lang="scss" scoped></style>
