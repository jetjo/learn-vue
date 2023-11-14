import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CustomTextarea from "./component.vue";

test('emits textarea value on submit', async () => {
	const wrapper = mount(CustomTextarea, {
		global: {
		}
	})
	const description = 'Some very long text...'

	// NOTE: 查询子组件,获取其引用
	await wrapper.findComponent({ ref: 'description' }).setValue(description)

	wrapper.find('form').trigger('submit')

	expect(wrapper.emitted('submitted')[0][0]).toEqual(description)
})