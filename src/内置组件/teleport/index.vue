<!-- 可定制插槽和 CSS 过渡效果的模态框组件。 -->
<template>
	<div>
		<button id="show-modal" @click="show = true">Show Modal</button>
		<Teleport to="body">
			<Modal :show="show" @close="show = false">
				<template #header>
					<h3>custom header</h3>
				</template>
			</Modal>
		</Teleport>
	</div>
</template>

<script setup>
	import { ref } from "#vue";
	import Modal from "./modal.vue";

	const show = ref(false);
</script>

<style lang="scss" scoped></style>
