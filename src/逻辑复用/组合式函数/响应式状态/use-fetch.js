import { ref, watchEffect, toValue } from "vue";

/**@typedef { typeof ref } Ref */

/**@param { Ref<string> | string } url */
export default function useFetch(url) {
	const data = ref(null);
	const loading = ref(false);
	/**@type {Ref} */
	const error = ref(undefined);

	const forceRefresh = (isForce) => {
		// function forceRefresh() {
		// data.value = null;假如能较快的获取的响应,这样会造成闪烁
		loading.value = true;
		error.value = undefined;
		let hasErr = false;
		console.warn('url: ', toValue(url), isForce);
		fetch(toValue(url))
			.then((r) => {
				if (!r.ok || r.status > 399) throw new Error(r.statusText || r.status);
				return r.json();
			})
			.then((r) => {
				data.value = r;
			})
			.catch((e) => {
				error.value = e;
				hasErr = true;
			})
			.finally(() => {
				if (hasErr) data.value = null;
				loading.value = false;
				console.warn('确认响应: ', { error: error.value, data: data.value, isForce });
			});
	}

	watchEffect(() => {
		forceRefresh();
	});

	return {
		data,
		loading,
		error,
		forceRefresh
	};
}
