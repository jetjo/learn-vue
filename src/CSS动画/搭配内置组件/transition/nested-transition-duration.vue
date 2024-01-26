<!-- nested-transition-duration.vue -->
<template>
	<div>
		<button @click="vIFlag = !vIFlag">{{ vIFlag ? "隐藏" : "显示" }}</button>
		<!-- NOTE: 由于一级子节点没有过渡效果,会导致在移除一级子节点时立即移除(没有过渡就没有transition end事件),
        而使得二级子节点的过渡效果没法展现,
        所以要使用duration属性明确告知Transition组件要在多少ms后才移除一级子节点.
     -->
		<!-- NOTE: 在节点插入时,一级子节点带有nested-enter-from类和nested-enter-active类,
    使得选择器".nested-enter-from .inner"和
    选择器".nested-enter-active .inner"选中二级子节点.
    插入后的下一帧,一级子节点的nested-enter-from类被移除,
    也使得选择器".nested-enter-from .inner"失效,
    所以二级子节点产生过渡效果;
    如果不指定Transition组件的duration.enter属性,
    由于一级子节点自身没有通过类nested-enter-from定义过渡的初始状态,
    所以一级子节点没有过渡效果,导致没有transitionend事件,
    所以在类nested-enter-from移除后的下一帧类nested-enter-active就被移除,
    而不是在transition end事件中移除;
    以至于使得二级子节点的过渡效果也立马消失了.
    为防止上述情形,必须给Transition组件的duration.enter属性传递一个足够长的时间,
    以保证二级子节点的过渡效果完整后再将一级子节点的nested-enter-active类移除.
   -->
		<Transition name="nested" :duration="{ enter: 3250, leave: 3000 }">
			<!-- <Transition name="nested"> -->
			<div v-if="vIFlag" class="outer">
				<div class="inner">Hello</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
	import { ref } from "#vue";
	const vIFlag = ref(true);
</script>

<style lang="scss" scoped>
	/* 应用于嵌套元素的规则 */
	.nested-enter-active .inner,
	.nested-leave-active .inner {
		transition:
			transform 3s ease-in-out,
			opacity 0.3s ease-in-out;
	}

	.nested-enter-from .inner,
	.nested-leave-to .inner {
		transform: translateX(100px);
		/*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
		opacity: 0.001;
	}

	/* 延迟嵌套元素的进入以获得交错效果 */
	.nested-enter-active .inner {
		transition-delay: 0.25s;
		//transition-duration: 5s;
		//transition: transform 8s linear, opacity 0.3s ease-in-out;
	}
	.nested-leave-active .inner {
		transition:
			transform 0.3s ease-in-out,
			opacity 3s ease-in-out;
	}
</style>

<!-- <style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */

.nested-leave-active {
  transition-delay: .25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style> -->

<style scoped>
	.outer,
	.inner {
		background: #eee;
		padding: 30px;
		min-height: 100px;
	}

	.inner {
		background: #ccc;
	}
</style>
