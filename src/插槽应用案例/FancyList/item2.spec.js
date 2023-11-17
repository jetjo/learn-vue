import { vi, describe, it, expect } from "vitest";
import { nextTick } from "vue";
import { mount, flushPromises } from "@vue/test-utils";
import Item2 from "./Item2.vue";
import { getBaseURL } from "../../../api/mocks/helpers";
import { postsPath, posts } from "../../../api/mocks";

describe('测试http请求的模拟', () => {
	it('', async () => {
		const wrapper = await mount(Item2, {
			props: {
				__mock__: {
					// url: postsPath,
					// url: getBaseURL() + '/posts',
					// url: getBaseURL() + '/posts/1',
				}
			}
		})

		// AssertionError: expected 'loading...' to include 'first post title'
		// expect(wrapper.text()).toContain(posts[0].title)
		// expect((async () => {
		// 	await new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			resolve()
		// 		}, 3000);
		// 	})
		// 	return wrapper.text()
		// })(), 'msg...').resolves.toContain(posts[0].title)
		await flushPromises();
		expect(wrapper.text()).toContain(posts[0].title);

		const input = wrapper.get('[data-test][type="text"]');
		input.setValue('qwwe324')
		await nextTick();
		// 简写
		await input.trigger('keydown.enter')
		await flushPromises();
		expect(wrapper.find('ul').html()).toBe(`<ul></ul>`)

		await input.setValue('')
		await input.trigger('keydown.enter')
		await flushPromises();
		expect(wrapper.text()).toContain(posts[0].title);

		const delBtn = wrapper.get('li [data-test-del]');
		await delBtn.trigger('click')
		await flushPromises();
		expect(wrapper.find('ul').html()).toBe(`<ul></ul>`)
	}, 5000)
})