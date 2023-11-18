import { vi, afterEach, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IndexSetup from "./index.setup.vue";
import IndexOpt from './index.opt.vue';

it('未模拟时', () => {
	const setupWrapper = mount(IndexSetup);
	expect(setupWrapper.html()).toMatchInlineSnapshot('"<div class=\\"with-tooltip\\"></div>"')

	const optWrapper = mount(IndexOpt);
	expect(optWrapper.html()).toMatchInlineSnapshot('"<div class=\\"with-tooltip\\"></div>"')
})

it('模拟时', () => {
	const setupWrapper = mount(IndexSetup, {
		global: {
			stubs: {
				// Stubbing directives won't work on functional components or <script setup>
				// due to lack of directive name inside of [withDirectives](https://vuejs.org/api/render-function.html#withdirectives) function.
				// Consider mocking directive module via your testing framework if
				// you need to mock directive used in functional component.
				// See https://github.com/vuejs/core/issues/6887 for proposal to unlock such functionality
				// NOTE: 经测试,确实如文档所说,对于setup语法糖无效
				vTooltip: true
			}
		}
	});
	expect(setupWrapper.html()).toMatchInlineSnapshot('"<div class=\\"with-tooltip\\"></div>"');

	const optWrapper = mount(IndexOpt, {
		global: {
			stubs: {
				// vTooltip: true
				vTooltip: {
					// 模拟和测试相关的必要的功能
					beforeMount(el) {
						el.classList.add('with-tooltip-mocked')
					},
				}
			}
		}
	});
	// expect(optWrapper.html()).toMatchInlineSnapshot('"<div></div>"');
	expect(optWrapper.html()).toMatchInlineSnapshot('"<div class=\\"with-tooltip-mocked\\"></div>"');
})