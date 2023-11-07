import { describe, expect, it, test } from "vitest";
import { mount } from "@vue/test-utils";
import Message from "./Message.vue";

test('display message', () => {
	const wrapper = mount(Message, {
		props: {
			msg: 'jetjo'
		}
	})

	expect(wrapper.html()).toContain('jetjo')
})

