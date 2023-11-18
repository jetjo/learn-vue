import { vi, beforeEach, afterEach, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Modal from "./modal.vue";
import Index from "./index.vue";

beforeEach(() => {
	// 如果测试组件内不使用了`Teleport`,
	// 并且`Teleport`的`to`是一个不存在的节点,就需要提前创建好
	// const inlineModalTarget = document.createElement('div')
	// inlineModalTarget.id = 'inline-modal'
	// document.body.appendChild(inlineModalTarget)
})

afterEach(() => {
	// 测试时,通过打印`document.body.outerHTML`可知,
	// 如果不重置,每次`test`对`document.body`的影响是叠加的
	// clean up
	document.body.outerHTML = '';
})

it('测试teleport', async () => {
	const wrapper = mount(Index)
	// 因为`Teleport`,要查找的节点不在`wrapper`所渲染的节点树内
	// 所以如果调用`wrapper.get`会直接抛出异常
	expect(wrapper.find('[data-test-teleported-modal]').exists()).toBe(false);
	// 但是如果被`Teleported`的是一个组件,比如本示例中的`Modal`
	// 那么,`wrapper`的虚拟节点中会有对`Modal VNode`的引用
	const modalAtBody = wrapper.getComponent(Modal);
	expect(modalAtBody).not.toBeUndefined()
	expect(modalAtBody).not.toBeNull()
	console.warn({ modalAtBody });
	// console.warn({ 'modalAtBody.attributes': modalAtBody.attributes });
	console.warn({ 'modalAtBody.attributes(target)': modalAtBody.attributes('target') });
	console.warn('document.body.outerHTML: ', document.body.outerHTML);

	const modals = wrapper.findAllComponents(Modal)
	expect(modals).toHaveLength(1)
})

it('', async () => {
	const modalTarget = document.createElement('div')
	modalTarget.id = 'modal'
	document.body.appendChild(modalTarget)

	const wrapper = mount(Index)
	const modals = wrapper.findAllComponents(Modal)
	expect(modals).toHaveLength(2)
})

it('', async () => {
	const inlineModalTarget = document.createElement('div')
	inlineModalTarget.id = 'inline-modal'
	document.body.appendChild(inlineModalTarget)

	// const wrapper =
	mount(Index)
	// const modals = wrapper.findAllComponents(Modal)
	// expect(modals).toHaveLength(1)

	const [...divWrapper] = document.querySelectorAll('[data-test-teleported-inline-modal]')
	const targetAttr = divWrapper.reduce((o, cur) => {
		const t = cur.getAttribute('target');
		o[t] = null;
		return o;
	}, {})
	// console.warn({ divWrapper, targetAttr });
	// expect().toBe('#inline-modal');
	// console.warn('document.body.outerHTML: ', document.body.outerHTML);
	expect(targetAttr).toHaveProperty('#inline-modal')
})