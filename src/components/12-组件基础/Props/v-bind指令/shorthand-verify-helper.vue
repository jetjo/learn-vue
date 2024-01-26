<template>
	<div>
		<!-- <SetupSyntaxSugar v-bind:title="title" v-bind:content="content" /> -->
		<SetupSyntaxSugar :title="title" :content="content" />
		<!-- Vue3.4版本及以上才支持 -->
		<SetupSyntaxSugar :title :content />
		<SetupSyntaxSugar v-bind="allProps" />
		<OptionalWithSetup :title="title" :content="content" />
		<!-- Vue3.4版本及以上才支持 -->
		<OptionalWithSetup :title :content />
		<OptionalWithSetup v-bind="allProps" />
	</div>
</template>

<script setup>
	import SetupSyntaxSugar from "./defineProps.vue";
	import OptionalWithSetup from "../setup.vue";

	const title = "摇滚雷鬼谢天笑";
	const content = "X.T.X";

	const allProps = {
		title,
		content,
	};
</script>

<style lang="scss" scoped></style>
