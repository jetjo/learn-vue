<template>
	<form @submit.prevent>
		<!-- vuetify.vue:3 [Vue warn]: Property "$account" was accessed
			during render but is not defined on instance.  -->
		<!-- <v-icon :icon="$account" /> -->
		<!-- <v-icon :icon="mdiAccount" /> -->
		<v-icon :icon="iconCom" />
		<v-textarea />
	</form>
</template>

<script>
import { VIcon } from "vuetify/components/VIcon";
import { VTextarea } from "vuetify/components/VTextarea";
import { mdiAccount } from '@mdi/js'
export default {
	components: {
		VIcon,
		VTextarea,
		// mdiAccount
	},
	data() {
		return {
			iconCom: mdiAccount
		}
	}
}
</script>
