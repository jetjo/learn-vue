<template>
	<ul>
		<li v-for="(item, index) in students" :key="index">
			<slot name="item" v-bind="item">{{ item.name }}</slot>
		</li>
	</ul>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const students = ref([
	{ name: "shuchang", age: 18, score: 120 },
	{ name: "liuyifei", age: 17, score: 121 },
]);

// 让Istanbul coverage provider 忽略以下if语句
/* istanbul ignore if */
// 让v8 coverage provider 忽略以下3行代码
/* c8 ignore next 3 */
/* istanbul ignore next */
function notTested(params) {
	console.log('未被测试涵盖的方法');
}

/* istanbul ignore next */
function notTested1(params) {
	console.log('未被测试涵盖的方法');
}

const props = defineProps(['posts'])

watchEffect(() => {
	if (!Array.isArray(props.posts)) {
		// students.value = [];
		return;
	}
	students.value = props.posts.map(s => ({
		...s,
		name: s.title
	}))
})
</script>

<style lang="scss" scoped></style>
