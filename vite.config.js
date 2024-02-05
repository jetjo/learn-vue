/// <reference types="vitest" />
/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { resolve } from "path";

import checker from "vite-plugin-checker";

const checkPlugin = !process.env.VITEST
	? checker({
			// typescript checker不支持vue项目, 当在js/ts文件中导入vue文件时 报错:
			// [TypeScript] Cannot find module './*.vue' or its corresponding type declarations.
			// typescript: true,
			vueTsc: true,
	  })
	: undefined;

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
	appType: "mpa", // 默认是spa, mpa是有多个html文件入口
	envPrefix: "VITE_", // 默认, 设置为空字符是危险的,可能泄露敏感数据
	define: {
		// If you would like to expose an unprefixed variable, you can use define to expose it:
		"import.meta.env.ENV_VARIABLE": JSON.stringify(process.env.ENV_VARIABLE),
		// 生产环境下有助于打包器清除无效代码
		"import.meta.vitest": "undefined",
		// 取消控制台警告: You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
		__VITE_DEF_Var1: '"def_var1"',
	},
	plugins: [
		vue(),
		checkPlugin,
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
		// Enabling this setting causes vite to determine file identity by the original file path (i.e. the path without following symlinks) instead of the real file path (i.e. the path after following symlinks).
		// preserveSymlinks: false,// 默认是:false
		// extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'], //导入时可以省略的扩展名,默认
		// mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'], // 默认, 当没有从package.json的`exports`字段中找的模块时,会使用这个字段的值
	},
	...vitestConfig,
	build: buildOption,
});
