<template>
	<form @submit.prevent="handleSubmit">
		<!-- <v-icon :icon="$account" /> -->
		<v-icon :icon="mdiAccount" />
		<v-textarea v-model="description" ref="description" />
		<button type="submit">Send</button>
	</form>
</template>

<script>
import { VIcon } from "vuetify/components/VIcon";
import { VTextarea } from "vuetify/components/VTextarea";
import { mdiAccount } from '@mdi/js'
export default {
	name: 'CustomTextarea',
	components: {
		// VIcon,
		// VTextarea,
		// mdiAccount
	},
	data() {
		return {
			description: '',
			mdiAccount
		}
	},
	methods: {
		handleSubmit() {
			this.$emit('submitted', this.description)
		}
	}
}
</script>
