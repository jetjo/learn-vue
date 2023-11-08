import { expect, it } from "vitest";

it('to learn how to expect error throwing', () => {
	expect(() => {
		throw new Error('error')
	}).toThrowErrorMatchingSnapshot('用于测试的提示信息, 并不是期待的异常的message');
})