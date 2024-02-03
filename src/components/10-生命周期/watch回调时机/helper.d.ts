import type { Ref } from "#vue";

interface UseMessagePrintRes {
	message: Ref<string>;
	/**
	 * @description 打印选择器`[child] [message]`和`[parent] [child-message]`选中的第一个元素的innerText
	 */
	printMessage: () => void;
	parentMessage: Ref<string>;
	/**
	 * @description 打印选择器`[parent] [message]`和`[child] [parent-message]`选中的第一个元素的innerText
	 */
	printParentMessage: () => void;
}

export type { UseMessagePrintRes };
