// // 在非SFC文件中, defineProps等define*宏必须明确导入
// // import { ref, toRef, defineProps, defineEmits } from "#vue";
// import { ref, toRef } from "#vue";
import { getInnerTextAfterColon } from "./helper";
import { camelCase } from "lodash-es";

function useMessagePrint({ ref, toRef }) {
	function genInnerTextDesc(cssSelector) {
		/**@type {Array<string>} */
		const attrNames = cssSelector
			.split(" ")
			.map((s) => s.replace(/[\[\]]/g, ""));
		if (attrNames.length !== 2) return cssSelector;
		if (attrNames.some((s) => s.includes("="))) return cssSelector;

		const attr0 = attrNames[0];
		const who =
			attr0 === "child"
				? "组件UI"
				: attr0 === "parent"
				? "父组件UI"
				: camelCase(attr0);

		return `${who}'s current ${camelCase(attrNames[1])}`;
	}

	function printInnerTextAfterColon(eleSelector) {
		const desc = genInnerTextDesc(eleSelector);
		console.log(desc + ": ", getInnerTextAfterColon(eleSelector));
	}

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
