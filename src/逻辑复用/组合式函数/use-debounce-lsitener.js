import { onMounted, onUnmounted } from "vue";
import { debounce } from "lodash-es";

/**
 * @param {EventTarget} target
 * @param {string} event
 * @param {EventListener} handler
 * @param {number} delay
 */
function useDebounceListener(target, event, handler, delay = 30) {
  (function (handler) {
    onMounted(() => {
      target.addEventListener(event, handler);
    });
    onUnmounted(() => {
      target.removeEventListener(event, handler);
    });
  })(delay >= 0 ? debounce(handler, delay) : handler);
}

export { useDebounceListener };
