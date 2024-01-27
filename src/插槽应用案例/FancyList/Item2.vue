<template>
	<!-- <div> -->

	<template v-if="!loading">
		<div>
			<input data-test type="text" @keydown="handleQuery" :value="q" />
		</div>
		<FancyList v-if="!error" :posts="posts">
			<template #item="{ title, name, body, id }">
				<h2>{{ title || name }}</h2>
				<p>
					{{ body }}
					<button data-test-del @click="handleDel(id)">删除</button>
				</p>
			</template>
		</FancyList>
		<div v-else>{{ error.message || error }}</div>
	</template>
	<div v-else>loading...</div>
	<!-- </div> -->
</template>

<script setup>
	import { computed, ref, toRefs } from "#vue";
	import FancyList from "./index.vue";
	import useFetch from "../../逻辑复用/组合式函数/响应式状态/use-fetch";
	import { getBaseURL } from "../../../api/mocks/helpers";

	/**@description 查询字符串 queryString */
	const q = ref();

	/**@description 获取搜索框输入的文本 */
	function handleQuery(e) {
		// console.log('handleQuery: ', e.target.value);
		q.value = e.target.value;
	}

	const props = defineProps({
		__mock__: {
			default: () => ({}),
		},
	});

	const { __mock__ } = toRefs(props);

	/**@description 发起检索请求的url,包含queryString */
	const url = computed(() => {
		// ReferenceError: Cannot access '__mock__' before initialization
		const b = __mock__.value.url || `${getBaseURL(false)}/posts`;
		const res = q.value ? `${b}?q=${q.value}` : b;
		console.log("发起检索请求的url: ", res);
		return res;
	});

	function handleDel(id) {
		console.log("handleDel: ", id);
		const controller = new AbortController();
		const signal = controller.signal;
		fetch(__mock__.value.url || `${getBaseURL(false)}/posts/${id}`, {
			method: "DELETE",
			signal,
		})
			.then((res) => res.json())
			.then((res) => {
				console.log("res: ", res);
			})
			.finally(() => forceRefresh(true));
	}

	const { data: posts, loading, error, forceRefresh } = useFetch(url);
</script>
