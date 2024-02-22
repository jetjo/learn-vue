// import { createApp, defineAsyncComponent } from "#vue";
import { mapValues } from "lodash-es";

/**
 * @description 返回一个`useRouter Vue Compose`
 * @description 该`Compose`接收两个参数: `map`和`ele`, 分别是路由表和挂载元素
 * @description 该`Compose`返回一个对象, 该对象有一个`app`属性, 该属性是一个`Vue`实例
 * @description 该`Compose`调用后,会监听`hashchange`事件, 并根据`hash`获取对应的组件, 并挂载到`ele`上
 * @description 该`Compose`初次调用,也会执行一遍`hashchange`事件处理程序, 执行一次挂载
 * @description 参数`map`形式如下: 字段名对应当前页面的`hash`(不包含`#`), 字段值用于定义组件, 字段值分三种情形: 1、空字符串, 2、字符串, 3、组件;
 * @description 1、如果参数`map`对应字段值是空字符, 那么返回的路由表对应字段值是一个异步组件, 该异步组件路径为`#${字段名}`;
 * @description 2、如果参数`map`对应字段值是字符串, 那么返回的路由表对应字段值是一个异步组件, 该异步组件路径为`getUrl(map[字段名])`;
 * @description 3、如果参数`map`对应字段值是组件, 那么返回的路由表对应字段值是该组件;
 * @param {object} option
 * @param {string} option.importUrl, 当返回的`useRouter`的参数`map`的某个字段值是非空字符串时, 用于`getUrl`, 以此为基地址计算给定路径的`url`
 * @param {*} option.createApp
 * @param {*} option.defineAsyncComponent
 */
function injectRouter({ createApp, defineAsyncComponent, importUrl }) {
	/**@description 根据`importUrl`计算给定路径的`url` */
	function getUrl(path) {
		return importUrl ? new URL(path, importUrl).toString() : path;
	}

	/**
	 * @param {*} map 其字段名是路由路径, 字段值用于定义异步组件, 字段值分三种情形: 1、空字符串, 2、字符串, 3、组件;
	 * @returns 路由表, 其字段值是组件或异步组件, 字段名和输入参数`map`一致
	 * @description 1、如果参数`map`对应字段值是空字符, 那么返回的路由表对应字段值是一个异步组件, 该异步组件路径为`#${字段名}`;
	 * @description 2、如果参数`map`对应字段值是字符串, 那么返回的路由表对应字段值是一个异步组件, 该异步组件路径为`getUrl(map[字段名])`;
	 * @description 3、如果参数`map`对应字段值是组件, 那么返回的路由表对应字段值是该组件;
	 */
	function getAsyncComponentsMap(map) {
		return mapValues(map, (v, k) => {
			if (typeof v !== "string") return v;
			if (v === "") return defineAsyncComponent(() => import(`#${k}`));
			return defineAsyncComponent(() => import(getUrl(v)));
			// return typeof v === "string"
			// 	? defineAsyncComponent(() => import(getUrl(v) || `#${k}`))
			// 	: v;
		});
	}

	/**
	 * @param {import('./router-c.d.ts').Com_Map} map 路由表
	 * @param {string|HTMLElement} ele 挂载元素,或者css选择器
	 */
	return function useRouter(map, ele) {
		let app;

		map = getAsyncComponentsMap(map);

		console.log("map:", map);

		const load = () => {
			console.clear();
			// 获取当前路径的hash
			const hash = location.hash.slice(1);
			console.log("hashchange:", hash);
			// 根据hash获取对应的组件
			const comp = map[hash] || map[""];
			app = createApp(comp);
			app.mount(ele);
		};

		// 监听hashchange事件
		window.addEventListener("hashchange", () => {
			app.unmount();
			load();
		});

		load();

		return {
			get app() {
				return app;
			},
		};
	};
}

export { injectRouter };
