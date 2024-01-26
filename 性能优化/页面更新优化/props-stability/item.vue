<template>
	<div :style="{ color: isActive ? 'green' : 'black' }">
		<!-- <div :style="{ color: activeFlag ? 'green' : 'black' }"> -->
		{{ post.name }}
	</div>
</template>

<script setup>
	import { computed, onUpdated, toRefs } from "#vue";

	const props = defineProps(["post", "activeId", "isActive"]);
	const { post, activeId, isActive } = toRefs(props);

	const activeFlag = computed(() => activeId.value === post.value.id);

	onUpdated(() => {
		console.log("list updated...");
	});
</script>
