/// <reference types="vitest" />
/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { resolve } from "path";

// import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'
// vite.config.ts
// import dns from "node:dns";

// // Enforce "localhost" as hostname instead of "127.0.0.1" - https://vitejs.dev/config/server-options.html#server-host
// // Skip when running through the the "vitest-explorer" VSCode extension.
// if (!process.env.RUNNING_VIA_VITEST_EXPLORER) {
// 	dns.setDefaultResultOrder("verbatim");
// }

/** @type{UserConfig} */
const vitestConfig = {
	// const vitestConfig: VitestUserConfigInterface = {
	test: {
		// api: Number(process.argv[process.argv.indexOf("--api") + 1]) || 12345,
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

const buildOption = {
	rollupOptions: {
		input: {
			main: "index.html",
			page1: resolve(
				__dirname,
				"src/components/0-模版语法/模版表达式中的全局变量",
				"index.html",
			),
			// 这里,`page1`和`page2`这些入口名称并没有被用作输出的html文件的名称,
			// 输出的html文件还是保持原来的名称和与main入口的相对位置没变
			page2: resolve(
				__dirname,
				"src/components/12-组件基础/Props/v-bind指令",
				"index.html",
			),
			// 添加更多入口点
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
			"@components": fileURLToPath(
				new URL("./src/components", import.meta.url),
			),
			// vue: "#vue",// 不行,必须是个文件
			"vue-esm-browser-dev": "vue/dist/vue.esm-browser.js",
			"vue-runtime-esm-browser-dev": "vue/dist/vue.runtime.esm-browser.js",
		},
	},
	...vitestConfig,
	build: buildOption,
});
