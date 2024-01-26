import { onMounted, onUnmounted } from "#vue";
import { debounce } from "lodash-es";

/**
 * @param {EventTarget} target
 * @param {string} event
 * @param {EventListener} handler
 * @param {number} delay
 */
function useDebounceListener(target, event, handler, delay = 30) {
	if (delay >= 0) handler = debounce(handler, delay);
	onMounted(() => {
		target.addEventListener(event, handler);
	});
	onUnmounted(() => {
		target.removeEventListener(event, handler);
	});
}

export { useDebounceListener };
