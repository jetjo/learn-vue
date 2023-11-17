<template>
	<div>
		{{ asyncInfo }}
	</div>
</template>

<script setup>
const asyncInfo = await new Promise(res => {
	setTimeout(() => {
		res('async message...')
	}, 5000);
})
</script>
