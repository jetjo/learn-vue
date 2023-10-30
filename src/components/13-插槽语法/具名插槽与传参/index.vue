<template>
	<div>
		<Item1>
			<!-- template标签比较特殊,不能视为组件,也就不能使用v-bind指令传参 -->
			<!-- template内容被编译为render function, 可使用v-slot指令给这个函数命名 -->
			<template v-slot:slotA="{ name, ...otherParam }">
				<!-- <template v-slot="slotA"> -->
				名称为{{ name }}的插槽的内容, otherParam:
				<div>{{ JSON.stringify(otherParam) }}</div>
			</template>
		</Item1>
	</div>
</template>

<script setup>
import Item1 from "./Item1.vue";
</script>