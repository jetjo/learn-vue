import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Item1 from "./Item1.vue";

describe('right fancy list', () => {
	test('have two expected list item', () => {
		const wrapper = mount(Item1, {
			props: {
				// items: ['one', 'two']
			}
		})

		expect(wrapper.findAll('li').length).toBe(2);
		expect(wrapper.text()).toContain('shuchang');
		// expect(wrapper.text()).toContain('jetjo');
		expect(wrapper.text()).toContain('liuyifei');
	})
})