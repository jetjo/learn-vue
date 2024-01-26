<template>
	<div>
		<ul>
			<li v-for="item in list" ref="listRef">{{ item }}</li>
		</ul>
		<!-- NOTE: 这下面一行并没有将input引用插入到原来的数组listRef中,而是对其重新赋值了 -->
		<!-- <input type="text" ref="listRef"> -->
		<!-- NOTE: 下面这样做,inputsRef并没有是一个数组,而是第二个input元素的引用 -->
		<input type="text" ref="inputsRef" />
		<input type="text" ref="inputsRef" />
	</div>
</template>

<script setup>
	import { ref } from "#vue";
	const list = ref([1, 2, 3, 4, 5]);
	const listRef = ref([]);
	const inputsRef = ref([]);
</script>
