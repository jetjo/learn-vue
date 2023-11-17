import { vi, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, inject, h } from "vue";
import { students as key } from "./keys";
import ProvideCom from "./provide-com.vue";

const TestHelper = defineComponent({
	template: `
	<div data-test-provide>{{students[0].name}} - {{students[0].age}}</div>
	`,
	setup() {
		return {
			students: inject(key)
		}
	}
})

it('通过插槽测试', () => {
	let student0 = {}
	const wrapper = mount(ProvideCom, {
		slots: {
			default: (params) => {
				if (params) {
					student0 = params;
					console.warn({ student0 });
				}
				return h(TestHelper)
			}
		}
	})
	// NOTE: 对于组合式API风格的SFC,
	// wrapper.vm可以访问到通过defineExpose暴露的成员
	// 貌似和组件Ref类似
	console.warn('vm: ', wrapper.vm);
	const divWrapper = wrapper.find('div[data-test-provide]')
	expect(divWrapper.text()).toBe(`${student0.name} - ${student0.age}`)
})
it('通过mock子组件测试', () => {
	const wrapper = mount(ProvideCom, {
		global: {
			stubs: {
				InjectCom: TestHelper
			}
		}
	})
	const divWrapper = wrapper.findComponent(TestHelper)
	let student0 = divWrapper.vm.students[0]
	console.warn({ student0 });
	expect(divWrapper.text()).toBe(`${student0.name} - ${student0.age}`)
})