<template>
	<div><input type='text'></div>
	<div><input type='text' v-focus></div>
	<div><input type='text' v-global-focus></div>
</template>

<script setup>
// 要以v开头的camelCase命名
const vFocus = {
	mounted(el) {
		// NOTE: 注意钩子名称
		// onMounted(el) {
		console.log(arguments);
		el.focus();
	}
}
</script>