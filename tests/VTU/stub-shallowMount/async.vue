<template>
	<div>
		<CC />
	</div>
</template>

<script setup>
	import { defineAsyncComponent } from "#vue";

	// const CC = await import('./ComplexC.vue');
	const CC = defineAsyncComponent(() => import("./ComplexC.vue"));
	// await Promise.resolve();
</script>
