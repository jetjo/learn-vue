import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Basic from "./basic.vue";

describe("学习VTU", () => {
	const readonly = false;
	const eventName = 'submitted'
	const wrapper = mount(Basic, {
		props: { eventName },
		// data: {
		// 	readonly: false
		// }
		data() {
			return {
				readonly
			}
		}
	});

	it('render a todo', () => {
		// NOTE: 1、获取确定存在的元素
		const todo = wrapper.get('[data-test="todo"]')
		expect(todo.text()).toBeTruthy();
	})

	let isFormExists;

	// 元素是否挂在到了DOM中
	it('条件渲染', () => {
		// 如果提前不确定一个元素是否存在,不能用get,
		// 因为如果不存在,get会直接抛出异常
		// const form = wrapper.get('[data-test="form"]');
		// NOTE: 2、确认一个元素是否存在
		isFormExists = wrapper.find('[data-test="form"]').exists();
		expect(isFormExists).toBe(!readonly)
	})

	const form = wrapper.get('[data-test="form"]');
	it('add new todo', async () => {
		if (!isFormExists) return;
		const input = wrapper.get('[data-test="new-todo"]');
		const newTodo = 'a new todo';
		// NOTE: 3、模仿用户交互,设置表单元素的值
		await input.setValue(newTodo);
		// NOTE: 4、模仿用户交互,引发事件
		await form.trigger('submit.prevent');

		// NOTE: 5、获取到所有匹配指定选择器的元素
		const todos = wrapper.findAll('[data-test="todo"]');
		// expect(todos.length).toBe(2);
		expect(todos).toHaveLength(2);
		expect(todos[1].text()).toBe(newTodo);
	})

	const checkbox = wrapper.get('[data-test="todo-checkbox"]');
	it('complete a todo', async () => {
		await checkbox.setValue(true);

		// NOTE: 6、获取元素的class列表
		const classes = wrapper.findAll('[data-test="todo"]').map(e => e.classes());

		console.log({ classes });
		expect(classes[0]).toContain('completed');
	})

	// 已挂在到DOM的元素是否可见
	it('检查元素可见性', () => {
		// `toBe`使用`Object.is`
		expect(checkbox.isVisible()).toBe(!readonly)
	})

	// 这里的事件也包括组件内部代码调用api触发的
	// 在选项式API中是执行`this.$emit()`
	// 在组合式API中是先定义`emit方法`(`const emit = defineEmits(['submitted'])`)
	// 再执行emit(‘eventName’, ...eventArgs)
	it('检查是否触发了预期的事件', async () => {
		if (!isFormExists) return;

		const newEventName = 'fucking...'
		// NOTE: 8、更改属性
		await wrapper.setProps({ eventName: newEventName })

		await form.trigger('submit.prevent');

		const emitted = wrapper.emitted();
		console.log({ emitted });

		expect(emitted).toHaveProperty(newEventName)

		// NOTE: 7、获取组件触发的所有事件
		const submitEvent = wrapper.emitted(newEventName);
		console.log({ submitEvent });

		expect(submitEvent).toHaveLength(1);
		// expect(submitEvent[0]).toEqual([1, false])
		expect(submitEvent[0]).toEqual([2, true])
	})
})
