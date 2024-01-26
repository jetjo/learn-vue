<template>
	<div>
		<AsyncCom1 />
		<AsyncCom2 />
	</div>
</template>

<script setup>
	import { defineAsyncComponent } from "#vue";
	const AsyncCom1 = defineAsyncComponent(() => import("./async-com-1.vue"));
	const AsyncCom2 = defineAsyncComponent(() => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res({
					template: /*html*/ `<div>async com 2...</div>`,
				});
			}, 50000);
		});
	});
</script>

<style lang="scss" scoped></style>
