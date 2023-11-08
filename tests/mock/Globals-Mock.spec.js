import { beforeAll, describe, vi } from "vitest";

const IntersectionObserverMock = vi.fn(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	takeRecords: vi.fn().mockImplementation(() => 'vi.fn()'),
	unobserve: vi.fn(),
}))

// 模拟 jsdom 或 node 运行时中不存在的全局变量和全局API。
// 把全局变量的值放入 globalThis 对象。
// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
// vi.stubGlobal('IntersectionObserver', IntersectionObserverMock());

// console.log(window.IntersectionObserver());
console.log('window.IntersectionObserver: ', IntersectionObserver);

describe('确认在访问仿真的全局变量前是否需要做些准备,比如beforeAll的调用', () => {
	beforeAll(() => {

	})
	it('', () => {
		expect(window.IntersectionObserver().takeRecords()).toEqual('vi.fn()')
		// expect(window.IntersectionObserver.takeRecords).toEqual('vi.fn()')
	})
})