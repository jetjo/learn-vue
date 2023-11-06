import { describe, expect, it, test } from "vitest";
import { mount } from "@vue/test-utils";
// import Message from "./Message.vue";
const Message = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('display message', () => {
	const wrapper = mount(Message, {
		props: {
			msg: 'Hello world'
		}
	})

	expect(wrapper.html()).toContain('Hello world')
})

