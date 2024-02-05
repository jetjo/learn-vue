<template>
	<div>
		<DefineProps
			:msg="msg"
			:age="age"
			:isShow="isShow"
			:list="list"
			:obj="obj"
			:fn="fn"
			:date="date"
			:symbol="symbol"
			:promise="promise"
			:set="set"
			:map="map"
		/>
		<button @click="msg = 'hello liuyifei!'">change msg</button>
		<button @click="age = 20">change age</button>
		<button @click="isShow = !isShow">change isShow</button>
		<button @click="list = ['liuyifei', 'made']">change list</button>
		<button @click="obj = { name: 'made', age: 20 }">change obj</button>
		<button @click="fn = () => console.log('liuyifei')">change fn</button>
		<button @click="date = new Date()">change date</button>
		<!-- TypeError: _ctx.Symbol is not a function -->
		<!-- <button @click="symbol = Symbol('made')">change symbol</button> -->
		<!-- TypeError: Cannot read properties of undefined (reading 'resolve') -->
		<!-- <button @click="promise = Promise.resolve('made')">change promise</button> -->
		<button @click="set = new Set(['made', 'liuyifei'])">change set</button>
		<button
			@click="
				map = new Map([
					[1, 'made'],
					[2, 'liuyifei'],
				])
			"
		>
			change map
		</button>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "#vue";

	import DefineProps from "./defineProps.vue";

	const msg = ref<string>("hello world!");
	const age = ref<number>(18);
	const isShow = ref<boolean>(true);
	const list = ref<string[]>(["made", "liuyifei"]);
	const obj = ref<object>({
		name: "liuyifei",
		age: 18,
		//  胸围
		bust: 90,
		//  腰围
		waist: 60,
		//  臀围
		hip: 90,
		height: 170,
		weight: 65,
		bloodType: "A",
		//  星座
		constellation: "天秤座",
		hobby: "唱歌、跳舞、打篮球",
	});
	const fn = ref<(...args: any[]) => any>(() => void 0);
	const date = ref<Date>(new Date());
	const symbol = ref<symbol>(Symbol("liuyifei"));
	const promise = ref<Promise<any>>(Promise.resolve("liuyifei"));
	const set = ref<Set<any>>(new Set(["liuyifei", "shuchang"]));
	const map = ref<Map<any, any>>(
		new Map([
			[1, "liuyifei"],
			[2, "shuchang"],
		]),
	);
</script>

<style lang="scss" scoped></style>
