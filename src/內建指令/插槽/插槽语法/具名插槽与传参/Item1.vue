<template>
	<div>
		<!-- 名称为slotA的插槽,调用父组件传递的children中的名称为slotA的render function -->
		<div>
			<slot name="slotA" v-bind="params">插槽A的默认内容</slot>
		</div>
		<!-- 将slot标签视为特殊的组件, name是一个特殊的属性, 就是组件传惨 -->
		<div>
			<slot name="slotB">插槽B的默认内容</slot>
		</div>
	</div>
</template>

<script setup>
const params = {
	state1: 'xxx',
	state2: 'xxx2'
}
</script>