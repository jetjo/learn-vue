<template>
	<div>
		<!-- NOTE: 当多个子组件实例共享一个父组件的状态时,需要注意props-stability -->
		<!-- 通过将使用activeId的代码提升到父组件中,
			仅将代码结果(is-active)传递给子组件,
			这样就达到了props-stability的目的. -->
		<ListItem
			v-for="(p, i) in posts"
			:post="p"
			:is-active="p.id === activeId"
		/>
		<!-- 当activeId变化时,所有ListItem都需要更新.
			但从使用意图讲,activeId只用于判断哪一个ListItem是active,
			所以当activeId更新时,最多只有两个ListItem需要更新 -->
		<ListItem v-for="(p, i) in posts" :post="p" :active-id="activeId" />
		<button @click="activeId++">更新activeId</button>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import ListItem from "./item.vue";
	const posts = [
		{
			id: 1,
			name: "liuyifei",
		},
		{
			id: 2,
			name: "shuchang",
		},
	];
	const activeId = ref(0);
</script>

<style lang="scss" scoped></style>
