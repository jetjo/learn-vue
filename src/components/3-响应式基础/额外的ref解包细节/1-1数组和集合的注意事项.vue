<template>
	<div>
		<ul>
			<li>
				2、数组和集合的注意事项
				<!-- NOTE: -->
				<p>
					与reactive不同,当ref作为响应式数组或其他原生数据集合类型(如Map)的元素时,不会自动解包:
				</p>
				<p>docs[0].value: {{ docs[0].value }}</p>
				<p>map.get("foo").value: {{ map.get("foo").value }}</p>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { ref, reactive, onMounted } from "#vue";

	const docs = reactive([ref("Vue 3 Guid")]);
	const map = reactive(new Map([["foo", ref(0)]]));
	onMounted(() => {
		// 在模版之外本来就不自动解包啊
		// console.log('docs[0].value: ', docs[0].value);//NOTE: 这里不自动解包
		// console.log('map.get("foo").value: ', map.get("foo").value);//NOTE: 这里不自动解包
	});
</script>
