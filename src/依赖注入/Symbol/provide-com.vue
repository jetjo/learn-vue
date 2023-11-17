<template>
	<div>
		<InjectCom />
		<slot v-bind="students[0]" />
	</div>
</template>

<script setup>
import { provide, ref } from "vue";
import { students as key } from "./keys";
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
provide(key, students);

defineExpose({
	students
})
</script>
