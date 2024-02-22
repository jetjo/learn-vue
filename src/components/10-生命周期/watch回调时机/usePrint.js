// // 在非SFC文件中, defineProps等define*宏必须明确导入
// // import { ref, toRef, defineProps, defineEmits } from "#vue";
// import { ref, toRef } from "#vue";
import { getInnerTextAfterColon } from "./helper";
import { camelCase } from "lodash-es";

/**
 * @description 1、注册`beforeMount`,`mounted`, `beforeUpdate`, `updated`四个生命周期钩子,
 * 									在这些钩子中打印生命周期名称
 * @description 2、返回一个`useMessagePrint Vue Compose`函数, 该函数接收一个`props`参数,
 * 									返回一个`useMessagePrintRes`对象
 * 									@description 2.1、`props`参数是使用该`useMessagePrint`函数的组件的props,
 * 																		该组件必须有`message`属性, 用于接收父组件传递的消息
 * 									@description 2.2、`useMessagePrintRes`返回对象有四个属性:
 * 																		@description 2.2.1、`message`: 为使用该`Compose`的组件定义的响应式状态
 * 																		@description 2.2.2、`printMessage`: 方法, 打印`[child] [message]`和`[parent] [child-message]`两个css选择器选中的节点的InnerText, 以及`message`的值
 * 																		@description 2.2.3、`parentMessage`: 响应式状态,对应`props.message`
 * 																		@description 2.2.3、`printParentMessage`: 方法, 打印`[parent] [message]`和`[child] [parent-message]`两个css选择器选中的节点的InnerText, 以及`parentMessage`的值
 */
function useMessagePrint(Vue) {
	// prettier-ignore
	const { ref, toRef, onMounted, onBeforeMount, onBeforeUpdate, onUpdated } = Vue;

	const descriptionMaps = {
		"[parent] [message]": "父组件UI的当前消息: ",
		"[child] [parent-message]": "子组件UI的当前父消息: ",
		"[child] [message]": "子组件UI的当前消息: ",
		"[parent] [child-message]": "父组件UI的当前子消息: ",
	};
	/**@description 打印css选择器选中的第一个节点的InnerText */
	function printInnerTextAfterColon(eleSelector) {
		console.log(
			String(descriptionMaps[eleSelector]),
			getInnerTextAfterColon(eleSelector),
		);
	}

	onBeforeMount(() => console.warn("beforeMount!"));
	onMounted(() => console.warn("mounted!"));
	onBeforeUpdate(() => console.warn("beforeUpdate!"));
	onUpdated(() => console.warn("updated!"));

	/**
	 * @returns {import('./helper.d.ts').UseMessagePrintRes}
	 */
	return function useMessagePrint(props) {
		const message = ref(Date.now() + " from child.");

		const printMessage = () => {
			console.log("child message: ", message.value);
			printInnerTextAfterColon("[child] [message]");
			printInnerTextAfterColon("[parent] [child-message]");
		};

		// // NOTE: [Vue warn]:
		// // defineProps() is a compiler-hint helper that is only usable inside <script setup> of a single file component.
		// // Its arguments should be compiled away and passing it at runtime has no effect.
		// const props = defineProps({
		// 	message: String,
		// });
		const parentMessage = toRef(props, "message");

		function printParentMessage() {
			console.log("parentMessage: ", parentMessage.value);
			printInnerTextAfterColon("[parent] [message]");
			printInnerTextAfterColon("[child] [parent-message]");
		}

		return {
			message,
			printMessage,
			parentMessage,
			printParentMessage,
		};
	};
}
export { useMessagePrint };
