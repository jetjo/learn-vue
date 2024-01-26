import { vi, it, expect, afterEach, beforeEach } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
// import ComplexA from "./ComplexA.vue";
// import ComplexB from "./ComplexB.vue";
// import ComplexC from "./ComplexC.vue";
import Async from "./async.vue";
import { defineComponent, h } from "#vue";

const AsyncComTestHelper = defineComponent({
	components: { Async },
	template: `<Suspense><Async /></Suspense>`,
});

afterEach(() => {
	document.body.outerHTML = "";
});

it("模拟异步组件", async () => {
	const _wrapper = mount(Async, {
		// const _wrapper = mount(AsyncComTestHelper, {
		global: {
			stubs: {
				CC: true,
			},
		},
	});
	// await flushPromises();
	const wrapper = _wrapper; //.getComponent(Async);
	expect(wrapper.html()).toMatchFileSnapshot(
		"./__snapshots__/async.cc.snap.html",
	);
});
it("模拟异步组件自身", async () => {
	const wrapper = mount(AsyncComTestHelper, {
		// const wrapper = mount(Async, {
		global: {
			stubs: {
				// NOTE: Async组件使用ComplexC组件定义了新的组件CC, 所以这里模拟ComplexC组件不起作用
				// ComplexC: true,
				CC: true,
				// BB: true
			},
		},
	});
	// NOTE: 如果不使用AsyncComTestHelper组件,借助Suspense组件,是无法等到Async异步渲染完成的
	// await flushPromises();
	expect(wrapper.html()).toMatchFileSnapshot(
		"./__snapshots__/async.ss.snap.html",
	);
});
