import { beforeAll, afterEach, afterAll } from 'vitest'
import { nodeServer } from "./api/mocks/";
import './tests/断言扩展/index'

beforeAll(() => {
	console.log('global beforeAll...');
	nodeServer.listen({
		// cause: Error: [MSW] Cannot bypass a request
		// when using the "error" strategy for the "onUnhandledRequest" option.
		onUnhandledRequest: 'error'
		// cause: Error: [MSW] Failed to react to an unhandled request:
		// unknown strategy "warning".
		// Please provide one of the supported strategies ("bypass", "warn", "error")
		// or a custom callback function as the value of the "onUnhandledRequest" option.
		// onUnhandledRequest: 'warning'
		// onUnhandledRequest: 'warn'
	})
})

afterEach(() => {
	// NOTE: 在每个test api执行后,都会执行这个callback
	console.log('global afterEach...');
	nodeServer.resetHandlers();
})

afterAll(() => {
	// NOTE: 经测试,这个callback被执行的次数🟰
	// 执行一次vitest时被测试的*.spec.js文件的数量.
	// 当vitest运行于watch模式时,
	// 同时更改并保存了n个*.spec.js文件,
	// 在vitest再次运行时,只会运行这n个改变的文件,
	// 那么这个回调也会被再次执行n次.
	// 也就是,这个callback会在执行完每个*.spec.js文件后被执行一次.
	// 与suite个数无关.
	console.log('global afterAll...');
	nodeServer.close();
})