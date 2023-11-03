<template>
	<div>
		<div>{{ state }}</div>
		<div><button @click="state++">更新状态</button></div>
		<!-- <div><button @click="state1++">更新UI无关状态</button></div> -->
		<div><button @click="emits('xxx')">UI无关事件</button></div>
		<div><button @click="handleClick">UI相关事件</button></div>
	</div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated, ref } from 'vue';
const state = ref(0);
const state1 = ref(0);
onBeforeUpdate(() => {
	console.log('onBeforeUpdate', 'Item1');
})
onUpdated(() => {
	console.log('onUpdated', 'Item1');
})
const emits = defineEmits(['update', 'xxx'])
function handleClick() {
	state.value++;
	emits('update');
	// state.value++;
}
</script>