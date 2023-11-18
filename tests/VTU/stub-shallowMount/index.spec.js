import { vi, it, expect, afterEach, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
// import ComplexA from "./ComplexA.vue";
// import ComplexB from "./ComplexB.vue";
// import ComplexC from "./ComplexC.vue";
import Index from "./index.vue";
import { defineComponent, h } from "vue";

afterEach(() => {
	document.body.outerHTML = '';
})

const ComplexMock = defineComponent({
	template: `<div>{{originComName}}</div>`,
	props: ['originComName']
})

it('使用ComplexMock', async () => {
	const wrapper = mount(Index, {
		global: {
			stubs: {
				ComplexA: () => h(ComplexMock, { originComName: 'ComplexA' }),
				// ComplexB: () => h(ComplexMock, { originComName: 'ComplexB' }),
				ComplexC: () => h(ComplexMock, { originComName: 'ComplexC' }),
			}
		}
	})

	expect(wrapper.html()).toMatchFileSnapshot("./__snapshots__/ComplexMockAll.1.snap.html")
	// expect(wrapper.html()).toMatchFileSnapshot("./__snapshots__/ComplexMockAll.snap.html")
})

it('使用默认Stubs', async () => {
	const wrapper = mount(Index, {
		global: {
			stubs: {
				ComplexA: true,
				// ComplexB: true,
				ComplexC: true,
			}
		}
	})

	expect(wrapper.html()).toMatchFileSnapshot("./__snapshots__/ComplexStubAll.1.snap.html")
	// expect(wrapper.html()).toMatchFileSnapshot("./__snapshots__/ComplexStubAll.snap.html")
})

it('shallowMount', async () => {
	const wrapper = mount(Index, {
		shallow: true,
		global: {
			stubs: {
				ComplexB: false,
				CC: true
			}
		}
	})

	expect(wrapper.html()).toMatchFileSnapshot("./__snapshots__/ShallowMount.1.snap.html")
	// expect(wrapper.html()).toMatchFileSnapshot("./__snapshots__/ShallowMount.snap.html")
})