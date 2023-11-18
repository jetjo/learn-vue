<template>
	<div>
		<label>{{ label }}</label>
		<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
		<!-- <input type='text' data-test> -->
	</div>
</template>

<script setup>
defineProps({
	label: String,
	modelValue: String
})
defineEmits(['update:modelValue'])
</script>
