<template>
	<div>
		<fieldset>
			<legend>Made with who:{{ formData.madeWho1 }}</legend>
			<input
				type="checkbox"
				id="liuyifei"
				name="made-who"
				value="liuyifei"
				v-model="formData.madeWho1"
			/><label for="liuyifei">刘亦菲</label>
		</fieldset>
		<fieldset>
			<legend>吃什么:{{ formData.eatWhat }}</legend>
			<p>无论是否设置了true-value, value的值都被忽略</p>
			<input
				type="checkbox"
				id="apple"
				name="eat-what"
				value="apple-on"
				:false-value="eatWhatNoCheck"
				v-model="formData.eatWhat"
			/><label for="apple">苹果</label>
		</fieldset>

		<p><a href="#checkbox-group">测试checkbox group</a></p>
		<p><a href="#radio">测试radio</a></p>
	</div>
</template>

<script setup>
	import { ref, reactive } from "vue";

	const madeWho1 = ref();

	// NOTE: 当一个checkbox或者一个checkbox-group没有被选中时,
	// 提交的表单数据中不会包含该checkbox或者checkbox-group的name
	// 将v-model的false-value辅助属性设置为undefined,
	// 可以模拟这种表现, 因为值为undefined的属性不会被序列化到表单数据中
	const eatWhatNoCheck = undefined;
	const eatWhat = ref(eatWhatNoCheck);

	const formData = reactive({
		madeWho1,
		eatWhat,
	});
</script>

<style lang="scss" scoped></style>
