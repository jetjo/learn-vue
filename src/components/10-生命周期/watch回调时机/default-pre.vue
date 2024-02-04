<template>
	<div child>
		<p message>message: {{ message }}</p>
		<p><button @click="updateMessage">更新消息</button></p>
		<p parent-message>parentMessage: {{ parentMessage }}</p>
	</div>
</template>

<script setup lang="ts">
	import {
		watchEffect,
		ref,
		toRef,
		onMounted,
		onBeforeMount,
		onBeforeUpdate,
		onUpdated,
	} from "vue";
	import type { UseMessagePrintRes } from "./helper";
	import { useMessagePrint } from "./usePrint.js";
	import { injectRouter } from "#utils";
	import { toValue } from "#vue";

	// type Flush = "pre" | "post" | "sync" | undefined;
	const props = defineProps({
		message: String,
		flush: String as any,
	});

	const { message, printMessage, parentMessage, printParentMessage } =
		useMessagePrint({
			ref,
			toRef,
			onMounted,
			onBeforeMount,
			onBeforeUpdate,
			onUpdated,
		})(props); // as UseMessagePrintRes;
	defineExpose({ message });

	const emit = defineEmits({
		newMsg: (msg) => {
			return typeof msg === "string";
		},
	});

	const flush = toValue(toRef(props, "flush") || "pre");
	watchEffect(() => printParentMessage(), { flush });

	function updateMessage() {
		console.clear();
		message.value = Date.now() + " from child";
		emit("newMsg", message.value);
	}

	watchEffect(() => printMessage(), { flush });
</script>

<style lang="scss" scoped>
	:global([child]) {
		background: #d8e0f2;
		padding: 1em 2em;
		border-radius: 0.5em;
		/* font-weight: bold; */
		font-size: 1.3rem;
		letter-spacing: 0.1em;
	}
	:global([child] button) {
		margin-top: 1em;
		padding: 0.5em 1em;
		border-radius: 0.5em;
		background: #f0f0f0;
		cursor: pointer;
		&:hover {
			background: #e0e0e0;
		}
	}
</style>
