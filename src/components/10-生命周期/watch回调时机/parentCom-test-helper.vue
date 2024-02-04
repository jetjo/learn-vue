<template>
	<div parent>
		<p message>message: {{ message }}</p>
		<p><button @click="updateMessage">更新消息</button></p>
		<default-pre :message @newMsg="newMsgHandler" ref="childRef" />
		<p child-message>childMessage: {{ childMessage }}</p>
	</div>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import defaultPre from "./default-pre.vue";

	const message = ref(Date.now() + "");
	const childMessage = ref("");
	const childRef = ref(null);

	onMounted(() => (childMessage.value = childRef.value?.message));

	function updateMessage() {
		message.value = Date.now() + "";
	}
	function newMsgHandler(msg) {
		childMessage.value = msg;
	}
</script>

<style lang="scss" scoped></style>
