<template>
	<div>
		<slot :name="slotName"></slot>
	</div>
</template>

<script setup>
	import { toRefs } from "#vue";
	const props = defineProps({
		slotName: {
			type: String,
			default: "default",
		},
	});
	const { slotName } = toRefs(props);
</script>
