// plugins/vuetify.js

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VIcon, VTextarea } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'

const vuetify = createVuetify({
	// components,
	components: {
		// VIcon,
		// VTextarea
	},
	// directives,
	icons: {
		defaultSet: 'mdi',
		// aliases: {
		// 	...aliases,
		// 	account: mdiAccount,
		// },
		sets: {
			mdi,
		},
	},
})

export default vuetify;