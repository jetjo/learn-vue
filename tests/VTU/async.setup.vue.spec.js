import { describe, it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import AsyncSetup from "./async.setup.vue";
import { Suspense, defineComponent } from "#vue";

describe("测试异步setup SFC", () => {
	beforeEach(() => {
		vi.useFakeTimers({
			loopLimit: 100,
		});
	});

	it("", async () => {
		const wrapperCom = defineComponent({
			components: { AsyncSetup },
			template: `<Suspense><AsyncSetup /></Suspense>`,
		});
		const wrapper = mount(wrapperCom);
		// NOTE: 在调用了vi.useFakeTimers的情况下,
		// 如果不调用,测试会一直暂停...
		vi.runAllTimers();
		// NOTE: 在组件的setup中有顶层await并且是使用计时器的情况下,
		// 必须配合vi.runAllTimers使用, 否则无效,🦙
		await flushPromises();
		// expect((async () => {
		// 	await new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			resolve()
		// 		}, 6000);
		// 	})
		// 	// const events = wrapper.emitted();
		// 	// console.log({ events });
		// 	// return wrapper.text()
		// 	const asyncWrapper = wrapper.findComponent(AsyncSetup);
		// 	return asyncWrapper.text()
		// })(), 'msg...').resolves.toBe('async message...')
		const asyncWrapper = wrapper.findComponent(AsyncSetup);
		expect(asyncWrapper.text()).toBe("async message...");
		// expect(wrapper.text()).toContain('async message...');
	}, 10000);
}, 10000);
