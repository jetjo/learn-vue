<template>
	<div child>
		<p message>message: {{ message }}</p>
		<p>
			<button @click="updateMessage">更新消息,并分发事件,以便父组件获悉</button>
		</p>
		<p parent-message>parentMessage: {{ parentMessage }}</p>
	</div>
</template>

<script setup lang="ts">
	import * as Vue from "vue";
	// import type { UseMessagePrintRes } from "./helper";
	import { useMessagePrint } from "./usePrint.js";
	import { injectRouter } from "#utils";
	import { toValue } from "#vue";

	const { watchEffect, toRef, createApp, defineAsyncComponent } = Vue;

	injectRouter({ createApp, defineAsyncComponent, importUrl: import.meta.url });

	// type Flush = "pre" | "post" | "sync" | undefined;
	const props = defineProps({
		message: String,
		flush: String as any,
	});

	// 查看 useMessagePrint 注释
	const messageRes = useMessagePrint(Vue)(props); // as UseMessagePrintRes;

	// prettier-ignore
	const { message, printMessage, parentMessage, printParentMessage } = messageRes;
	defineExpose({ message });

	const emit = defineEmits({
		newMsg: (msg) => {
			return typeof msg === "string";
		},
	});

	const flush = toValue(toRef(props, "flush") || "pre");

	// 父组件传来的消息更新后会执行
	watchEffect(() => printParentMessage(), { flush });

	function updateMessage() {
		console.clear();
		message.value = Date.now() + " from child";
		emit("newMsg", message.value);
	}

	// 子组件自身的message状态变化后会执行
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
