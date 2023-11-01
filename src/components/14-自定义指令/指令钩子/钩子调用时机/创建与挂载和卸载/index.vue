
<template>
	<div>
		<input type='text' v-d>
		<div>
			<Item1 v-d v-if="flag" />
		</div>
		<div><button @click="flag = !flag">卸载/挂载Item1</button></div>
	</div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import Item1 from './Item1.vue';

const flag = ref(true);
const vD = {
	created() {
		console.log(arguments, 'created');
	},
	beforeMount() {
		console.log('beforeMount');
	},
	mounted() {
		// 业务逻辑
		console.log('mounted');
	},
	beforeUnmount() {
		// 清除定时器等善后工作
		console.log('beforeUnmount');
	},
	unmounted() {
		console.log('unmounted');
	}
}
onMounted(() => console.log('onMounted'));
onBeforeMount(() => console.log('onBeforeMount'));
</script>