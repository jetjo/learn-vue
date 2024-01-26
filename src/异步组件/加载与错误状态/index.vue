<template>
	<div>
		<AsyncCom />
	</div>
</template>

<script setup>
	import { defineAsyncComponent } from "#vue";
	import LoadingCom from "./ loading-com.vue";
	import errorCom from "./error-com.vue";
	const AsyncCom = defineAsyncComponent({
		loader: () =>
			new Promise((_, rej) => {
				setTimeout(() => {
					rej();
				}, 15000);
			}),
		delay: 3000, //显示loadingComponent前的延迟,单位ms, 默认值200
		loadingComponent: LoadingCom,
		// NOTE: Error: Async component timed out after 10ms.(这个错误会被app.config.errorHandler捕获到)
		timeout: 10000, //超过10000ms后显示errorComponent,默认值Infinity
		errorComponent: errorCom,
	});
</script>

<style lang="scss" scoped></style>
