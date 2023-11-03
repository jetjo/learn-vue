<template>
	<div>组件</div>
</template>

<script setup>
const props = defineProps({
	msg: String
});
const emits = defineEmits(['update:msg']);
</script>