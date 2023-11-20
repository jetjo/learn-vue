

export default {

	data: () => ({ count: 1 }),
	template: `<button @click="clickHandler">{{ count }}</button>`,
	methods: {
		// https://vuejs.org/guide/scaling-up/ssr.html#client-hydration
		// 在实现Client Hydration之前,这段代码不存在于浏览器
		// The HTML is completely static on the client
		// since we are not loading Vue in the browser.
		clickHandler() {
			this.count++;
			console.log(this.count);
		}
	},

}