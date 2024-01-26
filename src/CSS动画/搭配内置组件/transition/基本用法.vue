<template>
	<div>
		<ul>
			<li class="switch-box">
				<button @click="vIFlag = !vIFlag">v-if、v-else过渡</button>
				<Transition>
					<p class="switch-debounce" v-if="vIFlag">v-if</p>
					<p class="switch-debounce" v-else>v-else</p>
				</Transition>
			</li>
			<li>
				<button @click="vShowFlag = !vShowFlag">v-show过渡</button>
				<Transition>
					<p v-show="vShowFlag">v-show</p>
				</Transition>
			</li>
			<li>
				<button @click="switchCom">component动态组件过渡</button>
				<Transition>
					<component :is="comName"> {{ comName }}</component>
				</Transition>
			</li>
			<li>
				<button @click="switchKey">切换key</button>
				<button @click="switchClass">切换其他属性</button>
				<Transition>
					<h3 :key="comKey" :class="comClass">{{ comKey + comClass }}</h3>
				</Transition>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { ref } from "#vue";
	const vIFlag = ref(false);
	const vShowFlag = ref(false);
	const comName = ref("h3");
	const comKey = ref("h3");
	const comClass = ref("h3");
	function switchCom() {
		if (comName.value === "h3") comName.value = "global-regist-com";
		else comName.value = "h3";
	}
	function switchKey() {
		if (comClass.value === "h3") comClass.value = "global-regist-com";
		else comClass.value = "h3";
	}
	function switchClass() {
		if (comClass.value === "h3") comClass.value = "global-regist-com";
		else comClass.value = "h3";
	}
</script>

<style lang="scss" scoped>
	/* NOTE: 即使基本用法,也得把需要的类写出来...,否则没有效果 */
	/**
当一个 <Transition> 组件中的元素被插入或移除时，会发生下面这些事情：
1、Vue 会自动检测目标元素是否应用了 CSS 过渡或动画。如果是，则一些 CSS 过渡 class 会在适当的时机被添加和移除。
2、如果有作为监听器的 JavaScript 钩子，这些钩子函数会在适当时机被调用。
3、如果没有探测到 CSS 过渡或动画、也没有提供 JavaScript 钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧后执行。
*/
	.v-enter-active,
	.v-leave-active {
		/*显示/隐藏/移除/插入元素前添加; 过渡结束后移除此class*/
		transition: opacity 5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		/*显示/插入元素前添加,显示/插入后下一个渲染帧时移除此class*/
		/*隐藏/移除元素前添加, 过渡结束后隐藏/移除元素*/
		opacity: 0;
	}
</style>

<!-- <style scoped>
.switch-box {
  height: 100px;
}
.switch-debounce {
  position: absolute;
}
</style> -->
