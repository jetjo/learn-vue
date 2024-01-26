<template>
	<div>
		<p>
			每个绑定仅支持单一表达式，也就是一段能够被求值的 JavaScript
			代码。一个简单的判断方法是是否可以合法地写在
			<span :style="{ color: getColor() }"> return </span>后面。
		</p>
		<span>{{ ok ? "YES" : "NO" }}</span>
	</div>
</template>

<script setup>
	// NOTE: 模版中的表达式将被沙盒化, 仅能够访问到isGloballyAllowed中列出的
	// 全局变量; 并且附加在全局对象上的自定义属性也是访问不到的
	// https://github.com/vuejs/core/blob/main/packages/shared/src/globalsAllowList.ts#L3
	// import { isGloballyAllowed } from "#vue"
	// console.log(WeakMap, isGloballyAllowed('WeakMap'));
	// console.log(Map, isGloballyAllowed('Map'));
	const ok = true;
	function getColor() {
		return "#8f8";
	}
</script>
