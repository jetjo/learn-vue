<template>
	<form @submit.prevent="submit">
		<input type="email" v-model="form.email" />

		<input type="password" @keydown.meta.c.exact.prevent="() => console.warn('不能复制密码!')" v-model="form.password"
			@blur="handlePwdBlur" />

		<textarea v-model="form.description" />

		<select v-model="form.city">
			<option value="new-york">New York</option>
			<option value="moscow">Moscow</option>
		</select>

		<input type="checkbox" v-model="form.subscribe" />

		<input type="radio" value="weekly" v-model="form.interval" />
		<input type="radio" value="monthly" v-model="form.interval" />

		<button type="submit">Submit</button>
	</form>
</template>

<script>

export default {
	data() {
		return {
			form: {
				password: 'pppppppp',
				email: '',
				description: '',
				city: '',
				subscribe: false,
				interval: ''
			}
		}
	},
	methods: {
		async submit() {
			this.$emit('submit', this.form)
		},
		handlePwdBlur(e) {
			if (e.relatedTarget.tagName === 'BUTTON') {
				this.$emit('focus-lost')
			}
		}
	}
}
</script>