<template>
	<div></div>
</template>

<script setup>
	import { reactive, readonly, shallowReactive, shallowReadonly } from "vue";
	import { watchEffect as effect } from "vue";

	// const rawMap = {};
	const rawMap = new Map();
	const reactiveMap = reactive(rawMap);

	const rawKey = ['key']
	const rawValue = ['value']

	const key = readonly(reactive(rawKey));
	const value = shallowReadonly(shallowReactive(rawValue));

	console.log(key, value);

	reactiveMap.set(key, value);

	// NOTE: 结论: 只有Set、Map、WeakSet、WeakMap实施了防止污染原始数据的策略
	console.log(reactiveMap.get(rawKey), "reactiveMap.get(rawKey)");
	console.log(reactiveMap.get(key), "reactiveMap.get(key)");
	console.log(rawMap.get(rawKey), "rawMap.get(rawKey)");
	console.log(rawMap.get(key), "rawMap.get(key)");

	// rawMap的key也是原始数据
	console.log(rawMap, "rawMap");

	console.log(reactiveMap, "reactiveMap");

	effect(() => {
		console.log(reactiveMap.nonReactiveProp, "state.nonReactiveProp");
	});

	// NOTE: 对于Set、WeakSet、Map、WeakMap,vue只有get拦截,
	// 所以设置不存在于Set、WeakSet、Map、WeakMap原型上的属性不会触发副作用
	reactiveMap.nonReactiveProp = 1;
</script>

<style lang="scss" scoped></style>
