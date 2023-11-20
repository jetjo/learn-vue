import { vi, beforeEach, afterEach, test, expect } from "vitest";
import { config, mount } from '@vue/test-utils'
import AnotherApp from './app.vue'

beforeAll(() => {
	// NOTE: render the default slot content, even when using shallow
	config.global.renderStubDefaultSlot = true
})

afterAll(() => {
	config.global.renderStubDefaultSlot = false
})

test('shallow with stubs', () => {
	const wrapper = mount(AnotherApp, {
		props: {
			authenticated: true
		},
		// NOTE: using shallow, the slot will not be rendered,
		// since the render function in <custom-button /> is stubbed out.
		shallow: true
	})

	// 如果不设置`config.global.renderStubDefaultSlot`
	// expect(wrapper.html()).toMatchInlineSnapshot('"<custom-button-stub></custom-button-stub>"')
	// expect(wrapper.html()).toContain('Log out')
	expect(wrapper.html()).toMatchInlineSnapshot(`
		"<custom-button-stub>
		  <div>Log out</div>
		</custom-button-stub>"
	`)
})