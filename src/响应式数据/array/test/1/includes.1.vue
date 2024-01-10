<template>
	<div>
测试确认: vue并没有对自定义方法的参数做任何处理
	</div>
</template>

<script setup>
import { reactive, readonly, watchEffect } from "vue";

const raw = [{}, {}]
const state = reactive(raw)

raw.includes = (...items) => console.log(items);

watchEffect(() => {
	console.log(state.includes(readonly(state[0]), state[1], state[2]))
})

</script>

<style lang="scss" scoped>

</style>