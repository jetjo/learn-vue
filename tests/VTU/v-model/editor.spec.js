import { vi, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Editor from "./editor.vue";

it('测试设置value是否触发事件', async () => {
	const wrapper = mount(Editor, {
		props: {}
	})

	const inputWrapper = wrapper.find('input');
	console.warn(wrapper.emitted(), '已触发事件');
	await inputWrapper.setValue('liuyifei');
	console.warn(wrapper.emitted(), '已触发事件');
})

it('modelValue should be updated', async () => {
	const wrapper = mount(Editor, {
		props: {
			modelValue: 'initial value...',
			'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
		}
	})

	await wrapper.find('input').setValue('value...value...');
	console.warn(wrapper.vm, 'wrapper.vm');
	expect(wrapper.props('modelValue')).toBe('value...value...');
})