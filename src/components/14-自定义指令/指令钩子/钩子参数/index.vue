
<template>
	<div>
		<input type='text' v-ele:foo.bar="state">
		<Item1 v-com:foo.bar="state" />
	</div>
</template>

<script setup>
import { reactive, getCurrentInstance } from 'vue';
import Item1 from './Item1.vue';
// 只能在setup和lifeCycle钩子中使用,不建议在生产环境中使用
// const uid = getCurrentInstance().uid;

const state = reactive({
	msg: 'hello'
})

const vEle = {
	mounted(el) {
		console.log(arguments, 'ele');
	}
}
const vCom = {
	// NOTE: 即使指令用于组件,也是绑定在了组件的根元素上
	mounted(com) {
		console.log(arguments, 'com');
	}
}

// console.log(com.__vnode === arguments[2], '钩子的第三个参数是绑定元素的vnode');
// console.log(arguments[1].arg, '指令的参数名');
// console.log(arguments[1].value, '指令的参数值');
// console.log(arguments[1].modifiers, '指令的修饰符');
// console.log(arguments[1].dir, '指令的定义对象');
// console.log(arguments[1].dir === vCom, '钩子的第二个参数的dir属性是指令的定义对象');
// console.log(arguments[1].instance, '使用该指令的组件实例');
// // console.log(arguments[1].instance.uid === uid, '钩子的第二个参数的instance属性是使用该指令的组件实例');
// console.log(arguments[1].instance.uid);
</script>