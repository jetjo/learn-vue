<template>
	<div>
		<pre>
			经测试确认:
			1、对于已经是以下两个api返回的响应式对象,
			readonly、shallowReadonly
					再次以这个响应式对象为参数调用readonly,
					不会有任何效果,
					会原样返回这个响应式对象,
			2、对于已经是以下两个api返回的响应式对象,
			reactive、shallowReactive
					再次以这个响应式对象为参数调用readonly,
					和使用普通的非响应式对象做参数没有区别
		</pre
		>
	</div>
</template>

<script setup>
// import {
// 		reactive,
// 		shallowReactive,
// 		readonly,
// 		shallowReadonly,
// 	} from "../../index";
	import {
		reactive,
		shallowReactive,
		readonly,
		shallowReadonly,
		onMounted,
	} from "vue";
	const raw = { name: "liuyifei", do: {
		task: 'be fuck'
	} };
	const reactiveState = reactive(raw);
	const shallowReactiveState = shallowReactive(raw);
	const readonlyState = readonly(raw);
	const shallowReadonlyState = shallowReadonly(raw);

	const readonlyReactiveState = readonly(reactiveState);
	const readonlyShallowReactiveState = readonly(shallowReactiveState);
	const readonlyReadonlyState = readonly(readonlyState);
	const readonlyShallowReadonlyState = readonly(shallowReadonlyState);
	onMounted(() => {
		console.log("index2-3");
		console.log({
			看看有没有相等的: new Set([
				reactiveState,
				shallowReactiveState,
				readonlyState,
				shallowReadonlyState,
				// readonlyReactiveState,
				// readonlyShallowReactiveState,
				readonlyReadonlyState,
				readonlyShallowReadonlyState,
			]),
			// readonlyReactiveState,
			// readonlyShallowReactiveState,
		});
		console.log(
			// readonlyReactiveState === reactiveState,
			// readonlyShallowReactiveState === shallowReactiveState,
			readonlyReadonlyState === readonlyState,
			readonlyShallowReadonlyState === shallowReadonlyState,
			// readonlyReactiveState === readonlyState,
			// readonlyShallowReactiveState === shallowReadonlyState,
		);

		// readonlyShallowReadonlyState.name = '刘亦菲';
		// readonlyShallowReadonlyState.do.task = 'be fuck~~~'

		// console.log(readonlyShallowReadonlyState);

		readonlyShallowReactiveState.name = '刘亦菲';
		readonlyShallowReactiveState.do.task = 'be fuck!!!'

		console.log(readonlyShallowReactiveState);
	});
</script>

<style lang="scss" scoped></style>
