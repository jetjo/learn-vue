import { h } from "vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import index from "./index.vue";
import Bar from "./Bar.vue";

describe('学习插槽测试', () => {
	it('字符串形式', () => {
		const slotContent = 'plain text'
		const wrapper = mount(index, {
			// type Slot = VNode | string | { render: Function } | Function | Component
			// slots?: { [key: string]: Slot } & { default?: Slot }
			slots: {
				// default: slotContent
				// default: `<div data-test-slot>${slotContent}</div>`
				// 涉及到了内部细节,默认的插槽参数名是params,params.x是坐标初始位置
				// default: `<div data-test-slot>${slotContent},{{params.x}}</div>`
				default: `<template #default="{x, y}">
				<div data-test-slot>${slotContent},{{x}}</div>
				</template>`
			}
		})
		// expect(wrapper.text()).toContain(slotContent)
		// expect(wrapper.find('div[data-test-slot]').text()).toBe(slotContent)
		expect(wrapper.find('div[data-test-slot]').text()).toBe(slotContent + ',0')
	})
	it('VNode???', () => {
		const slotContent = 'plain text'
		const wrapper = mount(index, {
			slots: {
				default: h('div', { 'data-test-slot': '' }, slotContent)
			}
		})
		expect(wrapper.find('div[data-test-slot]').text()).toBe(slotContent)
	})
	it('Component???', () => {
		const slotContent = 'plain text'
		const wrapper = mount(index, {
			slots: {
				default: Bar
			}
		})
		expect(wrapper.find('div[data-test-slot]').text()).toBe(slotContent)
	})
	it('Function???', () => {
		const slotContent = 'plain text'
		let slotParamsAssert;
		const wrapper = mount(index, {
			slots: {
				default: (params) => {
					slotParamsAssert = params;
					return slotContent;
				}
			}
		})
		// expect(wrapper.text()).toBe(slotContent)
		expect(slotParamsAssert).toStrictEqual({ x: 0, y: 0 })
	})
})