
<template>
	<div>
		<Item1 v-d:[foo].bar="state2" :propNoUse="state5" @xxx="state6++" @update="state++" />
		<!-- <input v-d:[foo].bar="state2" :propNoUse="state5" @xxx="state6++" @update="state++" /> -->
		<!-- <ylem1 v-d:[foo].bar="state2" :propNoUse="state5" @xxx="state6++" @update="state++">仍然能触发钩子,钩子第一个参数是HTMLUnknownElement类型</ylem1> -->
		<div>{{ state }}</div>
		<div><button @click="state++">更新状态</button></div>
		<!-- <div><button @click="state1++">更新不影响UI的状态</button></div> -->
		<div><button @click="state2++">更新不影响UI,但是绑定到指令参数值的状态</button></div>
		<div><button @click="state3++">更新不影响UI,但是绑定到指令参数名的状态</button></div>
		<div><button @click="state5++">更新不影响UI,但是传递给了子组件的状态</button></div>
	</div>
</template>

<script setup>
import { computed, onBeforeUpdate, onUpdated, ref } from 'vue';
import Item1 from './Item1.vue';
const state = ref(0);
const state1 = ref(0);
const state2 = ref(0);
const state3 = ref(0);
const state5 = ref(0);
const state6 = ref(0);
const foo = computed(() => 'foo' + state3.value);

const vD = {
	beforeUpdate() {
		console.log('beforeUpdate');
		// console.log(arguments, 'beforeUpdate');
	},
	updated() {
		// NOTE: 严格模式下,使用arguments关键字会抛出静默的默认不被捕获的异常
		console.log(arguments, 'updated');
	}
};

onBeforeUpdate(() => {
	console.log('onBeforeUpdate');
});

onUpdated(() => {
	console.log('onUpdated');
})

</script>