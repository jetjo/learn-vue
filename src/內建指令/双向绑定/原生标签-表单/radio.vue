<template>
	<div>
		<fieldset>
			<legend>Made with who:{{ madeWho1 }}</legend>
			<p>NOTE: 经测试, 对于单个radio, 必须设置value, 否则无法正常</p>
			<input
				type="radio"
				id="liuyifei"
				name="made-who"
				v-model="madeWho1"
			/><label for="liuyifei">刘亦菲</label>
		</fieldset>
		<fieldset>
			<legend>吃什么:{{ eatWhat }}</legend>
			<p>NOTE: 经测试, 对于radio, vue的true-value和false-value无用</p>
			<input
				type="radio"
				id="apple"
				name="eat-what"
				true-value="apple"
				:false-value="undefined"
				v-model="eatWhat"
			/><label for="apple">苹果</label>
		</fieldset>

		<p><a href="#radio-group">测试radio group</a></p>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	// NOTE: 对于radio, 初始值不能是undefined, 否则radio就被选中
	const madeWho1 = ref(null);
	const eatWhat = ref(null);
</script>

<style lang="scss" scoped></style>
