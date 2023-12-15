<template>
	<div>
		<pre>
			经测试确认:
				reactive、shallowReactive、readonly、shallowReadonly等
				不同类型的响应式数据拥有各自独立的reactiveMap;
				即对同一个api使用同一个参数target调用,返回结果是同一个proxy引用;
				但是不是同一个api,使用同一个参数target调用,返回的不是同一个proxy引用;
				这样保持了不同api的语意不变.
		</pre
		>
	</div>
</template>

<script setup>
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
	const reactiveState2 = reactive(raw);
	const shallowReactiveState2 = shallowReactive(raw);
	const readonlyState2 = readonly(raw);
	const shallowReadonlyState2 = shallowReadonly(raw);
	onMounted(() => {
		console.log({
			看看有没有相等的: new Set([
				reactiveState,
				reactiveState2,
				shallowReactiveState,
				shallowReactiveState2,
				readonlyState,
				readonlyState2,
				shallowReadonlyState,
				shallowReadonlyState2,
			]),
		});
		console.log("设置readonlyState.name: ");
		readonlyState.name = "shuchang";
		console.log("设置shallowReadonlyState.name: ");
		shallowReadonlyState.name = "jetjo";
	});
</script>

<style lang="scss" scoped></style>
