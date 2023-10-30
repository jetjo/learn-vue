import { ref, watchEffect, toValue } from "vue";

/** @param { string | Ref<string> } url  */
export default function useFetch(url) {
	const data = ref(null);
	const loading = ref(false);
	const error = ref(null);

	watchEffect(() => {
		// data.value = null;假如能较快的获取的响应,这样会造成闪烁
		loading.value = true;
		error.value = null;
		let hasErr = false;
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
			});
	});

	return {
		data,
		loading,
		error,
	};
}
