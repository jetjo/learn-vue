<template>
	<div>
		<input type="text" v-d />
		<div>
			<Item1 v-d v-if="flag" />
		</div>
		<div><button @click="flag = !flag">卸载/挂载Item1</button></div>
	</div>
</template>

<script setup>
	import { onBeforeMount, onMounted, ref } from "#vue";
	import Item1 from "./Item1.vue";

	const flag = ref(true);
	const vD = {
		created() {
			// 结合内建指令v-slot理解:
			// 根据组件钩子的定义,组件的beforeMount钩子调用前,组件已被编译为render function;
			// beforeMount钩子调用后,要调用组件的render function,那么,组件如果有插槽,插槽对应的
			// render function也该在此时被调用;
			// 所以推断,
			// 插槽内容被编译为render function这件事
			// 应该发生在使用插槽内容的子组件的beforeMount钩子之前,render func应该提前准备好.
			// 而插槽被编译为render function后,也该是v-slot指令的created、beforeMount这两个
			// 钩子被调用的时候;
			// 所以,
			// v-slot指令的created钩子应该在子组件的beforeMount钩子之前被调用;
			// 子组件的render function和插槽的render function被调用前,
			// v-slot的beforeMount钩子也应该已被调用,
			// v-slot指令的beforeMount和子组件的beforeMount钩子的调用顺序不确定,
			// 大概率v-slot的beforeMount先调用.
			console.log(arguments, "created");
		},
		beforeMount() {
			console.log("beforeMount");
		},
		mounted() {
			// 业务逻辑
			console.log("mounted");
		},
		beforeUnmount() {
			// 清除定时器等善后工作
			console.log("beforeUnmount");
		},
		unmounted() {
			console.log("unmounted");
		},
	};
	onMounted(() => console.log("onMounted"));
	onBeforeMount(() => console.log("onBeforeMount"));
</script>
