<template>
	<div>
		<!-- 有些指令需要一个参数,在指令后用冒号隔开 -->
		<a v-bind:href="url">探索自由世界</a>
		<!-- v-bind指令简写 -->
		<a :href="url">探索自由世界</a>
		<button v-on:click="onClick">探索自由世界</button>
		<!-- v-on指令简写 -->
		<button @click="onClick">探索自由世界</button>
		<!-- 有的指令不需要参数,只需要参数值 -->
		<a v-for="(p, i) in todoList">{{ p }}</a>
		<Item1>
			<!-- v-slot指令简写 -->
			<template #default>
				<div>我是插槽内容</div>
			</template>
		</Item1>
	</div>
</template>

<script setup>
import Item1 from '../13-插槽语法/插槽注意事项/Item1.vue'
// 找不到与以下网址对应的网页：http://localhost:5173/www.google.com
// const url = 'www.google.com'
const url = 'https://www.google.com'
function onClick() {
	console.log('探索自由世界')
}
const todoList = ['吃饭', '操逼', '睡觉']
</script>
