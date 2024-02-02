<template>
	<div>
		<fieldset>
			<legend>Made with who:{{ madeWho1 }}</legend>
			<p>
				<input
					type="checkbox"
					id="liuyifei"
					name="made-who"
					value="liuyifei"
					v-model="madeWho1"
				/><label for="liuyifei">刘亦菲</label>
			</p>
			<p>
				<input
					type="checkbox"
					id="shuchang"
					name="made-who"
					value="shuchang"
					v-model="madeWho1"
				/><label for="shuchang">舒畅</label>
			</p>
		</fieldset>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const madeWho1 = ref([]);
</script>

<style lang="scss" scoped></style>
