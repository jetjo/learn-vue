<template>
	<!-- <div> -->

	<template v-if="!loading">
		<div><input type='text' @keydown.enter="handleQuery" :value="q"></div>
		<FancyList v-if="!error" :posts="posts">
			<template #item="{ title, name, body, id }">
				<h2>{{ title || name }}</h2>
				<p>{{ body }}
					<button @click="handleDel(id)">删除</button>
				</p>
			</template>
		</FancyList>
		<div v-else>{{ error.message || error }}</div>
	</template>
	<div v-else>loading...</div>
	<!-- </div> -->
</template>

<script setup>
import { computed, ref, toRefs } from "vue";
import FancyList from "./index.vue";
import useFetch from '../../逻辑复用/组合式函数/响应式状态/use-fetch'
import { getBaseURL } from "../../../api/mocks/helpers";

const q = ref();

function handleQuery(e) {
	// console.log('handleQuery: ', e.target.value);
	q.value = e.target.value;
}

const { __mock__ } = toRefs(props)

const url = computed(() => {
	// ReferenceError: Cannot access '__mock__' before initialization
	const b = __mock__.value.url || `${getBaseURL(false)}/posts`;
	return q.value ? `${b}?q=${q.value}` : b;
})

function handleDel(id) {
	console.log('handleDel: ', id);
	fetch(__mock__.value.url || `${getBaseURL(false)}/posts/${id}`, {
		method: 'DELETE',
	}).then(res => res.json()).then(res => {
		console.log('res: ', res);
	}).finally(() => forceRefresh())
}

const { data: posts, loading, error, forceRefresh } = useFetch(url)

const props = defineProps({
	__mock__: {
		default: () => ({ })
	}
})


</script>
