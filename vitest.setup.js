import { beforeAll, afterEach, afterAll } from 'vitest'
import { nodeServer } from "./api/mocks/";

beforeAll(() => {
	// console.log('有没有执行到???');
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
	nodeServer.resetHandlers();
})

afterAll(() => {
	nodeServer.close();
})