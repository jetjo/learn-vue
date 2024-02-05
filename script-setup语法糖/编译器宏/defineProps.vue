<template>
	<div>
		<p msg>msg: {{ msg }}</p>
		<p age>age: {{ age }}</p>
		<p is-show>isShow: {{ isShow }}</p>
		<div list>
			list:
			<ul>
				<li v-for="e of list">{{ e }}</li>
			</ul>
		</div>
		<!-- 会自动调用JSON.stringify, 但是没有格式化换行 -->
		<p obj>obj: {{ obj }}</p>
		<!-- <p obj>obj: {{ JSON.stringify(obj, null, 4) }}</p> -->
		<pre obj>obj: {{ obj }}</pre>
		<!-- <pre obj v-html="obj"></pre> // [object Object] -->
		<pre obj="" v-html="JSON.stringify(obj, null, 4)"></pre>
		<!-- <p fn>fn: {{ fn }}</p> -->
		<p date>date: {{ date }}</p>
		<!-- 工作正常, 不用显式String(symbol) -->
		<p symbol>symbol: {{ symbol }}</p>
		<!-- NOTE: TypeError: Cannot convert a Symbol value to a string -->
		<!-- <p symbol>{{ `symbol: ${symbol}` }}</p> -->
		<p symbol>{{ `symbol: ${String(symbol)}` }}</p>
		<!-- <p symbol>{{ `symbol: ${symbol.toString()}` }}</p> ok -->
		<!-- [plugin:vite:vue] Error parsing JavaScript expression: 'await' is
			only allowed within async functions and at the top levels of modules -->
		<!-- <p promise>promise: {{ await promise }}</p> -->
		<div set>
			set:
			<ul>
				<li v-for="e of set">{{ e }}</li>
			</ul>
		</div>
		<div map>
			map:
			<ul>
				<li v-for="[key, value] of map">{{ key }} : {{ value }}</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { toRef, toRaw, toValue } from "#vue";

	const props = defineProps({
		msg: String,
		age: Number,
		isShow: Boolean,
		list: Array,
		obj: Object,
		fn: Function,
		date: Date,
		symbol: Symbol,
		promise: Promise,
		set: Set,
		map: Map,
		any: null,
		required: {
			type: String,
			required: true,
		},
		defaultProp: {
			type: String,
			default: "default",
		},
		validator: {
			type: String,
			validator: (val) => {
				return val === "validator";
			},
		},
	});

	// NOTE: 通过defineProps macro定义的属性只能在模版中直接引用...
	console.log(
		// msg,
		// age,
		// isShow,
		// list,
		// obj,
		toRef(props, "obj").value,
		toRaw(toRef(props, "obj").value),
		// JSON.stringify(toRaw(toValue(toRef(props, "obj")))),
		// JSON.stringify(toRaw(toValue(toRef(props, "obj"))), null, 2), //不会换行
		// fn,
		// date,
		// symbol,
		// promise,
		// set,
		// map,
		// any,
		// required,
		// defaultProp,
		// validator,
	);
	console.dir(toRaw(toValue(toRef(props, "obj"))));
	console.dir(JSON.stringify(toRaw(toValue(toRef(props, "obj"))))); //不会换行
	console.dir(JSON.stringify(toRaw(toValue(toRef(props, "obj"))), null, 2));
	console.dir(JSON.stringify(toRaw(toValue(toRef(props, "obj"))), null, 4));
</script>

<style lang="scss" scoped></style>
