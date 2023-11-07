import { describe, test, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Message from "../../components/Message.vue";

describe("Learn SnapShot", () => {
	it("display message snapshot", () => {
		const wrapper = mount(Message, {
			props: {
				msg: "jetjo",
			},
		});

		// 如果最新的测试中, 结果和上次的快照不同,并且
		// 这种不同是正常的,可以通过给vitest传递u参数来更新快照
		expect(wrapper.text()).toMatchSnapshot();
		expect(wrapper.html()).toMatchSnapshot();
		// 这种方案可以保持快照对于的语言的语法高亮
		expect(wrapper.html()).toMatchFileSnapshot('./__snapshots__/Message.ss.spec.snap.html');
	});
});