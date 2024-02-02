// import { createApp, defineAsyncComponent } from "#vue";
import { mapValues } from "lodash-es";
function injectRouter({ createApp, defineAsyncComponent, importUrl }) {
	return function useRouter(map, ele) {
		let app;
		const getPath = (url) =>
			importUrl ? new URL(url, importUrl).toString() : url;
		map = mapValues(map, (v, k) =>
			typeof v === "string"
				? defineAsyncComponent(() => import(getPath(v) || `#${k}`))
				: v,
		);
		console.log("map:", map);
		const load = () => {
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
	};
}
export { injectRouter };
