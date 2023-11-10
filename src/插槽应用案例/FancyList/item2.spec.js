import { vi, describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
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
		await expect((async () => {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 3000);
			})
			return wrapper.text()
		})(), 'msg...').resolves.toContain(posts[0].title)
	}, 5000)
})