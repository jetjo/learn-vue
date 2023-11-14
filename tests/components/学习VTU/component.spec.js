import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CustomTextarea from "./component.vue";

// What happens if your Input component is not that simple?
// You might be using a UI library, like Vuetify.
// If you rely on digging inside the markup to find the right element,
// your tests may break if the external library decides to change their internals.
// In such cases you can set the value directly,
// using the component instance and setValue.
/** @link [https://test-utils.vuejs.org/guide/essentials/forms.html#Testing-complex-Input-components] */
test('emits textarea value on submit', async () => {
	const wrapper = mount(CustomTextarea, {
		global: {
		}
	})
	const description = 'Some very long text...'

	// NOTE: 查询子组件,获取其引用
	await wrapper.findComponent({ ref: 'description' }).setValue(description)

	wrapper.find('form').trigger('submit')

	expect(wrapper.emitted('submitted')[0][0]).toEqual(description)
})