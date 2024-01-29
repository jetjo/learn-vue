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
		<p>typeof atob: {{ typeof atob }}</p>
		<p>typeof globalAtoB: {{ typeof globalAtoB }}</p>
		<p>typeof windowAtoB: {{ typeof windowAtoB }}</p>
		<p>typeof isNaN: {{ typeof isNaN }}</p>
		<p>
			经测试,能在模版中访问的全局变量是有限的, 绝大部分全局API都访问不到;
			可访问的变量在这里列出:
			<a
				href="https://github.com/vuejs/core/blob/main/packages/shared/src/globalsAllowList.ts#L3"
				>GLOBALS_ALLOWED</a
			>
		</p>
		<!-- TypeError: Cannot read properties of undefined (reading 'atob') -->
		<!-- <p>typeof window.atob: {{ typeof window.atob }}</p> -->
		<!-- <p>typeof globalThis.atob: {{ typeof globalThis.atob }}</p> -->
	</div>
</template>

<script setup>
	var __declaredWithVarInSetup = "var";
	const declaredWithVarInSetup =
		globalThis.__declaredWithVarInSetup || window.__declaredWithVarInSetup;
	globalThis.setOnGlobalThisInSFC = ["global"];

	const globalAtoB = globalThis.atob;
	const windowAtoB = window.atob;
</script>

<style lang="scss" scoped></style>
