/// <reference types="vitest" />
/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

/** @type{UserConfig} */
const vitestConfig = {
	// const vitestConfig: VitestUserConfigInterface = {
	test: {
		globals: true,
		environment: "jsdom",
		// 会在每个测试文件前都运行
		setupFiles: ["./vitest.setup.js"],
		// globalSetup: ['./vitest.setup.js'],
		unstubAllEnvs: true,
		// outputFile: {
		// 	html: './test/__vitest__/index.html',
		// },
		// 包括inline test code block
		includeSource: ["src/**/*.{js,ts}"],
		coverage: {
			enabled: true,
			// provider: "istanbul",
			provider: "v8",
			// default报告器用于在终端中实时查看测试结果
			reporter: ["text", "json", "html", "clover"],
			reportsDirectory: "./tests/unit/coverage",
		},
		snapshotFormat: {
			// https://vitest.dev/guide/snapshot.html#_2-printbasicprototype-is-default-to-false
			printBasicPrototype: false,
		},
		deps: {
			inline: ["vuetify"],
		},
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		// 生产环境下有助于打包器清除无效代码
		"import.meta.vitest": "undefined",
	},
	plugins: [
		vue(),
		vuetify({
			// NOTE: 对vitest同样有效,会自动注册被测组件依赖的vuetify组件
			autoImport: true, // Enabled by default
			styles: { configFile: "src/settings.scss" },
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			vue: "vue/dist/vue.esm-bundler.js",
			"vue-esm-browser-dev": "vue/dist/vue.esm-browser.js",
			"vue-runtime-esm-browser-dev": "vue/dist/vue.runtime.esm-browser.js",
		},
	},
	...vitestConfig,
});
