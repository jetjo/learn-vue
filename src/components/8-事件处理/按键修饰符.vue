<template>
	<div>
		<input type="text" />
		<!-- <input ref="inputRef" type="text" @keyup=" onKeyup "> -->
		<!-- <input ref="inputRef" type="text" @keyup.context-menu=" onKeyup "> -->
		<input
			id="keyboard-modifiers-vue-input-2"
			ref="inputRef"
			type="text"
			@keyup.f13="onKeyup"
		/>
		<input type="text" @keyup.ctrl="onKeyup" />
	</div>
</template>

<script setup>
	import { ref, onMounted } from "#vue";
	const inputRef = ref(null);
	onMounted(() => {
		if (inputRef.value == null)
			inputRef.value = document.getElementById(
				"keyboard-modifiers-vue-input-2",
			);
		inputRef.value.focus();
	});

	/**@param e {KeyboardEvent}*/
	function onKeyup(e) {
		// e.key的kebab-case形式可用作v-on(简写@)指令的修饰符
		console.log("键盘修饰符: ", e.key);
	}
</script>

<style lang="scss" scoped></style>
