import { createApp } from "#vue";

function useRouter(map, ele) {
	let app;
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
}

export { useRouter };
