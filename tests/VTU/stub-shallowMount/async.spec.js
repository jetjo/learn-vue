import { vi, it, expect, afterEach, beforeEach } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
// import ComplexA from "./ComplexA.vue";
// import ComplexB from "./ComplexB.vue";
// import ComplexC from "./ComplexC.vue";
import Async from "./async.vue";
import { defineComponent, h } from "vue";

const AsyncComTestHelper = defineComponent({
	components: { Async },
	template: `<Suspense><Async /></Suspense>`
})

afterEach(() => {
	document.body.outerHTML = '';
})

it('模拟异步组件', async () => {
	const _wrapper = mount(Async, {
		// const _wrapper = mount(AsyncComTestHelper, {
		global: {
			stubs: {
				CC: true
			}
		}
	})
	// await flushPromises();
	const wrapper = _wrapper//.getComponent(Async);
	expect(wrapper.html()).toMatchFileSnapshot('./__snapshots__/async.cc.snap.html')
})
it('模拟异步组件自身', async () => {
	const wrapper = mount(Async, {
		global: {
			stubs: {
				ComplexC: true
			}
		}
	})
	await flushPromises();
	expect(wrapper.html()).toMatchFileSnapshot('./__snapshots__/async.ss.snap.html')
})