<template>
	<div>
		<pre>
属性ref的值可以是一个函数,函数的第一个参数是对应元素的实例;
    注意事项:
    1、每次ui重新渲染时都会调用这个函数;
    2、要想传入函数而不是一个字符串,需要动态的绑定,即ref前加冒号
    3、绑定的元素被卸载时,函数也会被调用,此时函数的第一个参数是null
        </pre
		>
		<template v-if="flag">
			<ul>
				<li v-for="item in list" :ref="getListRef">{{ item }}</li>
			</ul>
		</template>
		<button @click="onChangeClick">修改列表</button>
		<button @click="onClick">移除列表</button>
	</div>
</template>

<script setup>
	import { ref } from "#vue";
	const flag = ref(true);
	const list = ref([1, 2]);
	function getListRef(el) {
		console.log(el);
	}
	function onChangeClick() {
		if (list.value[1] === 2) list.value.splice(1, 1, 3);
		else list.value.splice(1, 1, 2);
	}
	function onClick() {
		flag.value = false;
	}
</script>
