<template>
	<div>
		<pre>
			经测试确认:
			对于已经是以下4个api返回的响应式对象,
			reactive、shallowReactive、readonly、shallowReadonly
					再次以这个响应式对象为参数调用reactive,
					不会有任何效果,
					会原样返回这个响应式对象,
		</pre
		>
	</div>
</template>

<script setup>
	// import {
	// 	reactive,
	// 	shallowReactive,
	// 	readonly,
	// 	shallowReadonly,
	// } from "../../index";
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

	const reactiveReactiveState = reactive(reactiveState);
	const reactiveShallowReactiveState = reactive(shallowReactiveState);
	const reactiveReadonlyState = reactive(readonlyState);
	const reactiveShallowReadonlyState = reactive(shallowReadonlyState);
	onMounted(() => {
		console.log("index2");
		console.log({
			看看有没有相等的: new Set([
				reactiveState,
				shallowReactiveState,
				readonlyState,
				shallowReadonlyState,
				reactiveReactiveState,
				reactiveShallowReactiveState,
				reactiveReadonlyState,
				reactiveShallowReadonlyState,
			]),
			// reactiveReactiveState,
			// reactiveShallowReactiveState,
			// reactiveReadonlyState,
			// reactiveShallowReadonlyState,
		});
		console.log(
			reactiveReactiveState === reactiveState,
			reactiveShallowReactiveState === shallowReactiveState,
			reactiveReadonlyState === readonlyState,
			reactiveShallowReadonlyState === shallowReadonlyState,
		);
		reactiveShallowReadonlyState.name = "jetjo";
	});
</script>

<style lang="scss" scoped></style>
