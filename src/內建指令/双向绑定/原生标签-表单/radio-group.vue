<template>
	<div>
		<fieldset>
			<legend>Made with who:{{ madeWho1 }}</legend>
			<p>
				<input
					type="radio"
					id="liuyifei"
					name="made-who"
					v-model="madeWho1"
				/><label for="liuyifei">刘亦菲</label>
			</p>
			<p>
				<input
					type="radio"
					id="shuchang"
					name="made-who"
					v-model="madeWho1"
				/><label for="shuchang">舒畅</label>
			</p>
			<p>
				<input
					type="radio"
					id="puqiu"
					name="made-who"
					value="winkwink"
					v-model="madeWho1"
				/><label for="puqiu">浦秋</label>
			</p>
		</fieldset>
		<p>
			对于radio group, 如果不指定所有radio的value, 无法正常工作, 前往<a
				href="#radio-group-fix"
				>修复版本</a
			>
		</p>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	// NOTE: 即使是radio-group, 默认值也不能是undefined, 否则最后一个没有设置value的radio就被选中
	const madeWho1 = ref();
	// const madeWho1 = ref(null);
</script>

<style lang="scss" scoped></style>
