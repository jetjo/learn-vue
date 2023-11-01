export const i18nOptsKey = Symbol("i18n-opts-key");

export default {
	install(app, opts) {
		app.config.globalProperties.$translate = (keys, defaultLang) => {
			if (typeof keys !== "string") return "";
			const result = keys.split(".").reduce((o, i) => {
				if (o) return o[i]
			}, opts);
			console.log(result, 'result');
			// 经测试,Vue的模版差值机制可以自动探测对象上是否重载了Object的toString方法,
			// 如果重载了,就调用
			// 如果没有,就调用JSON.stringify
			// if (typeof result === 'object') return result.toString();
			if (typeof result === 'object' && result.toString === Object.prototype.toString) result.toString = () => defaultLang || keys;
			return result;
		};

		app.provide(i18nOptsKey, opts);
		app.provide('i18n-opts-key', opts);
	},
};
