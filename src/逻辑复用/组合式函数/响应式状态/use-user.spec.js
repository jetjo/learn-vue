import { it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { useUser } from "./use-user";
import { defineComponent } from "vue";
import axios from "axios";

const TestHelper = defineComponent({
	// 这里恰是`useUser`函数的参数
	props: ['userId'],
	setup(props, ctx) {
		// console.warn({ ctx });
		return {
			// 直接返回`useUser`的返回
			...useUser(props.userId)
		}
	}
})

const { mockUser } = vi.hoisted(() => ({ id: 1, name: 'liuyifei', age: 18 }))
vi.spyOn(axios, 'get').mockResolvedValue({ data: mockUser })

it('fetch user on mount', async () => {
	const wrapper = mount(TestHelper, {
		props: {
			userId: 1
		}
	})
	expect(wrapper.vm.user).toBeUndefined();
	await flushPromises();
	expect(wrapper.vm.user).toStrictEqual(mockUser)
})