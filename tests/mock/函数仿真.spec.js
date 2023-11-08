import { beforeEach, afterEach, describe, it, expect, vi } from "vitest";

// #region 被测试代码
function getLatest(index = messages.items.length - 1) {
	return messages.items[index]
}

const messages = {
	items: [
		{ message: 'Simple test message', from: 'Testman' },
		// ...
	],
	getLatest, // can also be a `getter or setter if supported`
}
// #endregion

describe('reading messages', () => {
	afterEach(() => {
		// restore all methods to their original implementations.
		vi.restoreAllMocks();
	})

	it('should get the latest message with a spy', () => {
		// 创建一个间谍,目标是messages的getLatest方法
		const spy = vi.spyOn(messages, 'getLatest')
		expect(spy.getMockName()).toEqual('getLatest')

		expect(messages.getLatest()).toEqual(messages.items[messages.items.length - 1])
		expect(spy).toHaveBeenCalledTimes(1);

		spy.mockImplementationOnce(() => 'access-restricted')
		// expect(getLatest()).toEqual('access-restricted') //failed
		expect(messages.getLatest()).toEqual('access-restricted')

		expect(spy).toHaveBeenCalledTimes(2);

		// spy.mockImplementation(() => 'access-restricted')
		expect(spy).toHaveReturnedWith('access-restricted')

		// 使得spy失效
		vi.restoreAllMocks()
		spy.mockReturnValueOnce('yeap');
		// expect(messages.getLatest()).toEqual('yeap')//failed

	})

	it('should get with a mock', () => {
		const mock = vi.fn().mockImplementation(getLatest);

		expect(mock()).toEqual(messages.items[messages.items.length - 1])
		expect(mock).toHaveBeenCalledTimes(1);

		mock.mockImplementationOnce(() => 'yeah')
		expect(mock()).toEqual('yeah')
		expect(mock).toReturnWith('yeah')
		expect(mock).toHaveBeenCalledTimes(2);

		expect(mock()).toEqual(messages.items[messages.items.length - 1])
		expect(mock).toHaveBeenCalledTimes(3)

		mock.mockReturnValueOnce('fucking liuyifei');
		const res = mock();
		expect(res).toEqual('fucking liuyifei')
		expect(mock).toHaveNthReturnedWith(3, 'fucking liuyifei')
	})
})