<template>
	<div parent>
		<p message>message: {{ message }}</p>
		<p><button @click="updateMessage">更新消息</button></p>
		<default-pre
			:message
			@newMsg="newMsgHandler"
			ref="childRef"
			:flush="hash"
		/>
		<p child-message>childMessage: {{ childMessage }}</p>
	</div>
</template>

<script setup>
	import {
		onMounted,
		ref,
		onBeforeMount,
		onBeforeUpdate,
		onUpdated,
	} from "vue";
	import defaultPre from "./default-pre.vue";

	onBeforeMount(() => console.warn("parent before mount!"));
	onMounted(() => console.warn("parent mounted!"));
	onBeforeUpdate(() => console.warn("parent before update!"));
	onUpdated(() => console.warn("parent updated!"));

	const message = ref(Date.now() + "");
	const childMessage = ref("");
	const childRef = ref(null);

	const hash = location.hash.slice(1);

	onMounted(() => (childMessage.value = childRef.value?.message));

	function updateMessage() {
		console.clear();
		message.value = Date.now() + "";
	}
	function newMsgHandler(msg) {
		childMessage.value = msg;
	}
</script>

<style lang="scss" scoped></style>
