// 无论dev模式还是prod模式, 不会经过esbuild和rollupJs处理, package.json imports字段中定义的别名无效, 所以报错:
//  TypeError: Failed to resolve module specifier "#vue". Relative references must start with either "/", "./", or "../".
import { ref } from "vue";

export default {
	setup() {
		const count = ref("9999999999");
		return {
			message: count,
		};
	},
	template: /*html*/ `<div>count is {{ message }}</div>`,
};
