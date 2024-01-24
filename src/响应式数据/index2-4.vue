<template>
	<div>
		<pre>
			经测试确认:
			1、对于已经是以下两个api返回的响应式对象,
			readonly、shallowReadonly
					再次以这个响应式对象为参数调用shallowReadonly,
					不会有任何效果,
					会原样返回这个响应式对象,
			2、对于已经是以下两个api返回的响应式对象,
			reactive、shallowReactive
					再次以这个响应式对象为参数调用shallowReadonly,
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
	const raw = { name: "liuyifei" };
	const reactiveState = reactive(raw);
	const shallowReactiveState = shallowReactive(raw);
	const readonlyState = readonly(raw);
	const shallowReadonlyState = shallowReadonly(raw);

	const shallowReadonlyReactiveState = shallowReadonly(reactiveState);
	const shallowReadonlyShallowReactiveState =
		shallowReadonly(shallowReactiveState);
	const shallowReadonlyReadonlyState = shallowReadonly(readonlyState);
	const shallowReadonlyShallowReadonlyState =
		shallowReadonly(shallowReadonlyState);
	onMounted(() => {
		console.log("index2-4");
		console.log({
			看看有没有相等的: new Set([
				reactiveState,
				shallowReactiveState,
				readonlyState,
				shallowReadonlyState,
				// shallowReadonlyReactiveState,
				// shallowReadonlyShallowReactiveState,
				shallowReadonlyReadonlyState,
				shallowReadonlyShallowReadonlyState,
			]),
			shallowReadonlyReactiveState,
			shallowReadonlyShallowReactiveState,
		});
		console.log(
			shallowReadonlyReactiveState === reactiveState,
			shallowReadonlyShallowReactiveState === shallowReactiveState,
			shallowReadonlyReadonlyState === readonlyState,
			shallowReadonlyShallowReadonlyState === shallowReadonlyState,
			shallowReadonlyReactiveState === shallowReadonlyState,
			shallowReadonlyShallowReactiveState === shallowReadonlyState,
		);
		shallowReadonlyReactiveState.name = "jetjo";
	});
</script>

<style lang="scss" scoped></style>
