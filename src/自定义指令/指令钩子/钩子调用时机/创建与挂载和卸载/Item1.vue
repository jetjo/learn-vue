<!-- 没有UI的组件,父组件绑定的指令无效 -->
<!-- <template></template> -->
<!-- Runtime directive used on component with non-element root node. The directives will not function as intended.  -->
<!-- <template>
	Item1
</template> -->
<template>
	<div>Item1</div>
</template>
<script setup>
	import { onBeforeMount, onMounted } from "#vue";

	onMounted(() => console.log("onMounted Item1"));
	onBeforeMount(() => console.log("onBeforeMount Item1"));
</script>
