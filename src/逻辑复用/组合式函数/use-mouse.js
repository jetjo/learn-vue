import { reactive } from "vue";
import { useDebounceListener } from "./use-debounce-listener";

/** @param {number}  debounceDelay */
function useMousePos(debounceDelay = 30) {
  const pos = reactive({
    x: 0,
    y: 0,
  });
  useDebounceListener(
    window,
    "mousemove",
    (e) => {
      pos.x = e.pageX;
      pos.y = e.pageY;
    },
    debounceDelay
  );
  return { pos };
}

export { useMousePos };
