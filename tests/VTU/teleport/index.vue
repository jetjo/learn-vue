<template>
	<div>
		<Teleport to="body">
			<Modal target="body~~" />
		</Teleport>
		<Teleport to="#modal">
			<Modal target="#modal" />
		</Teleport>
		<Teleport to="body">
			<div data-test-teleported-inline-modal='' target="body"></div>
		</Teleport>
		<Teleport to="#inline-modal">
			<div data-test-teleported-inline-modal='' target="#inline-modal"></div>
		</Teleport>
	</div>
</template>

<script setup>
import Modal from './modal.vue';
</script>
