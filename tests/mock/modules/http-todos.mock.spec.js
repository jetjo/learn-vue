import { vi, describe, it, expect, afterEach } from "vitest";

import { list, get } from "../../../src/http-get-todos";
import axios from "axios";

// #region vi.hoisted 用例
// import { originalMethod } from './path/to/module.js'

// const { mockedMethod } = vi.hoisted(() => {
//   return { mockedMethod: vi.fn() }
// })

// vi.mock('./path/to/module.js', () => {
//   return { originalMethod: mockedMethod }
// })
// #endregion

const { aTodo } = vi.hoisted(() => {
	return {
		aTodo: { id: 1, text: 'mocked of id 1', done: false }
	}
})

vi.mock('../../../src/http-get-todos', async (importOriginal) => {
	// const originalModule = await importOriginal<typeof import('./path/to/module.js')>()
	const originalModule = await importOriginal()
	return {
		...originalModule,
		list: vi.fn(originalModule.list),
		// replace some exports
		// 因为aTodo是外部定义变量,因为vi.mock静态提升的原因,
		// aTodo的定义需要使用vi.hoisted静态提升
		get: vi.fn(originalModule.get).mockImplementation(() => aTodo),
		// get: vi.fn(originalModule.get).mockResolvedValue(aTodo),
		default: 'default export...'
	}
})
// 仍然需要被明确主动直接的模拟...
vi.mock('axios');

describe('test module mock', () => {
	afterEach(() => {
		vi.clearAllMocks();
	})
	it('', async () => {
		const res = await list();
		expect(res.data.length).toBe(2)

		// NOTE: get返回的是promise, 为何???
		const todo = await get();
		console.log(todo);
		expect(todo.text).toEqual(aTodo.text)

		get.mockImplementation(() => ({ id: 211, text: 'mocked once message', done: false }))
		// get.mockImplementationOnce(() => ({ id: 211, text: 'mocked once message', done: false }))
		// NOTE: 这里又不是返回Promise了, why
		const todo2 = get();
		expect(todo2.id).toBe(211)
	})

	it('should throw error', async () => {
		list.mockImplementationOnce(() => axios.get('/api/not-exist'))

		// const err = await list();
		let rejFlag;
		await list().catch(() => rejFlag = true)
		expect(rejFlag).to.be.true
	})
})

