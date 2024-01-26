<template>
	<slot v-bind="pos"></slot>
</template>

<script setup>
	import { reactive, onMounted, onUnmounted } from "#vue";
	import { debounce } from "lodash-es";
	import { useDebounceListener } from "../../../逻辑复用/组合式函数/use-debounce-listener";
	const pos = reactive({
		x: 0,
		y: 0,
	});
	/** @param {MouseEvent} e  */
	function onMouseMove(e) {
		pos.x = e.clientX;
		pos.y = e.clientY;
	}

	useDebounceListener(window, "mousemove", (e) => onMouseMove(e), 30);
</script>
