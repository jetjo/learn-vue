import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import form from "./form.vue";

describe('表单交互测试', () => {
	const wrapper = mount(form);
	const formData = {
		password: 'pppppppp',
		email: 'jetjo@git.com',
		description: 'Lorem ipsum dolor sit amet',
		city: 'moscow',
		subscribe: true,
		interval: 'monthly'
	}
	test('检查表单元素的值', async () => {
		const emailEle = wrapper.find('[type="email"]')
		await emailEle.setValue(formData.email)
		expect(emailEle.element.value).toBe(formData.email)
	})

	// NOTE: If you don't pass a parameter to setValue for
	// OPTION, CHECKBOX or RADIO inputs, they will set as checked.
	test('设置不同类型表单元素的值', async () => {
		await wrapper.find('textarea').setValue(formData.description)
		await wrapper.find('select').setValue(formData.city)
		await wrapper.find('input[type=checkbox]').setValue()
		await wrapper.find('input[type=radio][value=monthly]').setValue()
	})

	test('测试提交事件及事件参数', async () => {
		await wrapper.find('form').trigger('submit.prevent')
		const emitted = wrapper.emitted();
		console.log({ emitted });
		const submitEvent = wrapper.emitted('submit');
		// NOTE: 同一个事件多次触发,最后一次触发的事件索引是0
		console.log({ submitEvent, s0: submitEvent[0], s1: submitEvent[1] });
		expect(submitEvent[0]).toStrictEqual([formData])
	})

	const password = wrapper.find('[type="password"]');
	test('阻止用户复制密码', async () => {
		// NOTE: 借助多个VUE事件修饰符模拟用户复制动作
		// 即按下 `cmd + c`
		// await password.trigger('keydown.meta.c.exact.prevent')
		await password.trigger('keydown.meta.c.exact')

		const keydownEvents = wrapper.emitted('keydown');
		expect(keydownEvents).toHaveLength(1)
		expect(keydownEvents[0][0]).toHaveProperty('key')
		expect(keydownEvents[0][0]).toHaveProperty('metaKey')
		expect(keydownEvents[0][0].key).toBe('c')
		expect(keydownEvents[0][0].metaKey).toBe(true)
	})

	it('模拟事件参数', async () => {
		const componentToGetFocus = wrapper.find('button')
		await password.trigger('blur', {
			relatedTarget: componentToGetFocus.element
		})

		expect(wrapper.emitted('focus-lost')).toBeTruthy()
	})
})