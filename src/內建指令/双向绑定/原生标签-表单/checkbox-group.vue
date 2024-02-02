<template>
	<div>
		<fieldset>
			<legend>Made with who:{{ madeWho1 }}</legend>
			<p>
				<input
					type="checkbox"
					id="liuyifei"
					name="made-who"
					v-model="madeWho1"
				/><label for="liuyifei">刘亦菲</label>
			</p>
			<p>
				<input
					type="checkbox"
					id="shuchang"
					name="made-who"
					v-model="madeWho1"
				/><label for="shuchang">舒畅</label>
			</p>
			<p>
				<input
					type="checkbox"
					id="puqiu"
					name="made-who"
					value="winkwink"
					v-model="madeWho1"
				/><label for="puqiu">浦秋</label>
			</p>
		</fieldset>
		<p>
			对于checkbox group, 如果不指定所有checkbox的value, 无法正常工作, 前往<a
				href="#checkbox-group-fix"
				>修复版本</a
			>
		</p>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	// NOTE: 经测试, 对于checkbox-group, 如果`madeWho1`的初始值不是数组类型,
	// 即使每个checkbox对设置了合理的value, 都无法正常工作,
	// 当其中有一个checkbox选中时, ·madeWho1·的值总会变成true, 导致其他所有checkbox都选中;
	// 然后,取消选中一个checkbox时, ·madeWho1·的值总会变成false, 导致其他所有checkbox都取消选中;
	// const madeWho1 = ref("liuyifei");
	// const madeWho1 = ref();
	const madeWho1 = ref([]);
</script>

<style lang="scss" scoped></style>
