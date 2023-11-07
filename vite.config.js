/// <reference types="vitest" />
/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

/** @type{UserConfig} */
const vitestConfig = {
	// const vitestConfig: VitestUserConfigInterface = {
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			enabled: true,
			provider: "v8", //'istanbul',
			reporter: ['text', 'json', 'html', 'clover'],
			reportsDirectory: "./tests/unit/coverage",
		}
	}
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'vue': 'vue/dist/vue.esm-bundler.js'
		}
	},
	...vitestConfig,
})
