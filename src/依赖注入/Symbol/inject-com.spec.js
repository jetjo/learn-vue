import { it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { students as key } from "./keys";
import InjectCom from "./inject-com.vue";

const mockStudents = [
	{
		name: "shuchang",
		age: 18,
	},
	{
		name: "liuyifei",
		age: 19,
	},
]

it('渲染了注入的数据', () => {
	const wrapper = mount(InjectCom, {
		global: {
			provide: {
				[key]: mockStudents
			}
		}
	})

	const students = wrapper.findAll('li[data-test-inject]');
	expect(students).toHaveLength(2);
	expect(students[1].text()).toBe(`${mockStudents[1].name} - ${mockStudents[1].age}`);
})