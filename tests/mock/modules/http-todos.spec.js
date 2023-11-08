import { vi, describe, it, expect, afterEach } from "vitest";

// axios is a default export from `__mocks__/axios.js`
import axios from "axios";

import { list } from "../../../src/http-get-todos";

// 不管放在什么位置,都会被静态提升到文件顶部
// 模拟的第三方库必须已经安装
// 被测试的http-get-todos模块依赖于axios,即此测试间接依赖axios
// 无论http-get-todos是否被模拟, axios都需要直接在此处被mock
vi.mock('axios');

describe('test module mock', () => {
	afterEach(() => {
		vi.clearAllMocks();
	})
	it('', async () => {
		const res = await list();
		expect(res.data.length).toBe(2)

		axios.get.mockImplementationOnce(() => ([{ id: 1, text: 'mocked once message', done: false }]))
		const res2 = await list();
		// const listMock = vi.fn(list).mockResolvedValueOnce([{ id: 1, text: 'mocked once message', done: false }])
		// const res2 = await listMock();
		expect(res2).toEqual([{ id: 1, text: 'mocked once message', done: false }])
	})
})

