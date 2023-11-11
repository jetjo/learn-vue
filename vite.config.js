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
		// 会在每个测试文件前都运行
		setupFiles: ['./vitest.setup.js'],
		// globalSetup: ['./vitest.setup.js'],
		unstubAllEnvs: true,
		coverage: {
			enabled: true,
			// provider: "istanbul",
			provider: "v8",
			reporter: ['text', 'json', 'html', 'clover'],
			reportsDirectory: "./tests/unit/coverage",
		},
		snapshotFormat: {
			// https://vitest.dev/guide/snapshot.html#_2-printbasicprototype-is-default-to-false
			printBasicPrototype: false
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
