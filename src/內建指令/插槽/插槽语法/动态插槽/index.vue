<template>
	<div>
		<Item1 :slotName="slotName">
			<!-- [plugin:vite:vue] Codegen node is missing for element/if/for node. Apply appropriate transforms first. -->
			<!-- template插槽内容得放在vue 组件内部,不能放在原生标签内部 -->
			<template #[slotName]>
				slot-{{ slotName }} content...
			</template>
		</Item1>
		<select v-model="slotName">
			<option disabled>请选择</option>
			<option v-for="sn of slots">{{ sn }}</option>
		</select>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Item1 from "./Item1.vue";
const slotName = ref('default')
const slots = [
	'default', 'header', 'footer', 'body'
]
</script>