<template>
	<div child>
		<p message>message: {{ message }}</p>
		<p><button @click="updateMessage">更新消息</button></p>
		<p parent-message>parentMessage: {{ parentMessage }}</p>
	</div>
</template>

<script setup lang="ts">
	import { watchEffect } from "#vue";
	import type { UseMessagePrintRes } from "./helper";
	import { useMessagePrint } from "./usePrint.js";

	const props = defineProps({
		message: String,
	});
	// prettier-ignore
	const { message, printMessage, parentMessage, printParentMessage } = useMessagePrint(props) as UseMessagePrintRes;

	const emit = defineEmits({
		newMsg: (msg) => {
			return typeof msg === "string";
		},
	});

	watchEffect(() => printParentMessage());

	function updateMessage() {
		message.value = Date.now() + " from child";
		emit("newMsg", message.value);
	}

	watchEffect(() => printMessage());
</script>

<style lang="scss" scoped>
	[child] {
		background: #8b9fd2;
	}
</style>
