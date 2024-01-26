<template>
	<ul>
		<li v-for="(student, index) in students" :key="index">
			{{ student.name }} - {{ student.age }}
		</li>
		<li><button @click="onClick">添加学生</button></li>
	</ul>
</template>

<script setup>
	import { inject } from "#vue";
	// const { students, addStudent } = inject("students");
	const {
		// students: { value: students },//如果不是shallowReadonly,这样仍然是只读的
		students: {
			value: [...students], //可写,但没有响应性,页面不自动更新
		},
		addStudent,
	} = inject("students");
	console.log({ students });
	function onClick() {
		// addStudent({
		//   name: "柳如是"
		// });
		students.push({
			name: "董小宛",
			age: 20,
		});
	}
</script>

<style lang="scss" scoped></style>
