import { expect, it } from "vitest";

it('to learn how to expect error throwing', () => {
	expect(() => {
		throw new Error('error')
	}).toThrowErrorMatchingSnapshot('提示');
})