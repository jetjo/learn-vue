<template>
	<div>
		<Item1>
			<!-- template外插槽内容1 -->
			<!-- <template #default> -->
			<!-- <template #xxx> -->
			<!-- <template v-slot:default> --> <!-- ok -->
			<!-- <template v-slot="default"> SyntaxError: Unexpected token 'default' -->
			<!-- 相当于v-slot:default="xxx", 可见插槽名字是由v-slot的参数名指定,不是参数值指定 -->
			<template v-slot="xxx">
				<!-- <template> --> <!-- 使用template时,必须设置插槽名称,否则被忽略 -->
				template内插槽内容
			</template>
			<!-- 使用template时,默认插槽的内容就只能放在插槽内部 -->
			<!-- 不使用template时,默认插槽的内容可以分散开 -->
			<!-- template外插槽内容2 -->
		</Item1>
	</div>
</template>

<script setup>
import Item1 from "./Item1.vue";
</script>