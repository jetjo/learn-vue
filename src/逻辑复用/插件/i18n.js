export const i18nOptsKey = Symbol("i18n-opts-key");

export default {
	install(app, opts) {
		app.config.globalProperties.$translate = (keys) => {
			if (typeof keys !== "string") return "";
			const result = keys.split(".").reduce((o, i) => {
				if (o) return (o[i] || '');
				else return '';
			}, opts);
			console.log(result, 'result');
			if (typeof result === 'object') return result.toString();
			return result;
		};

		app.provide(i18nOptsKey, opts);
		app.provide('i18n-opts-key', opts);
	},
};
