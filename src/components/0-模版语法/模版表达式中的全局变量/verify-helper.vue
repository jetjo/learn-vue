<template>
	<div>
		<p>declaredWithVarInSetup: {{ declaredWithVarInSetup }}</p>
		<!-- runtime-core.esm-bundler.js:41 [Vue warn]: Property "setOnGlobalThisInSFC" was accessed during render but is not defined on instance.  -->
		<p>setOnGlobalThisInSFC: {{ setOnGlobalThisInSFC }}</p>
		<!-- [Vue warn]: Property "notExistOnGlobalThisAtAll" was accessed during render but is not defined on instance.  -->
		<!-- <p>notExistOnWindowAtAll: {{ notExistOnGlobalThisAtAll }}</p> -->
		<p>notExistOnWindowAtAll: {{ String(notExistOnGlobalThisAtAll) }}</p>
		<p>
			利用`app.config.globalProperties`注册的全局变量: {{ $1CustomGlobalVar }}
		</p>
	</div>
</template>

<script setup>
	var declaredWithVarInSetup = "var";
	globalThis.setOnGlobalThisInSFC = ["global"];
</script>

<style lang="scss" scoped></style>
