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
		<p obj>obj: {{ obj }}</p>
		<!-- <p fn>fn: {{ fn }}</p> -->
		<p date>date: {{ date }}</p>
		<p symbol>symbol: {{ symbol }}</p>
		<p promise>promise: {{ promise }}</p>
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
	defineProps({
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

	console.log(
		msg,
		age,
		isShow,
		list,
		obj,
		fn,
		date,
		symbol,
		promise,
		set,
		map,
		any,
		required,
		defaultProp,
		validator,
	);
</script>

<style lang="scss" scoped></style>
