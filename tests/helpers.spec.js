// helpers.spec.js
import { describe, expect, test, beforeAll, beforeEach } from 'vitest';
import { increment } from './helpers.js'

beforeAll(() => {
	// NOTE: 在这个文件执行前执行一次
	// 在global beforeAll之后, suite beforeAll之前执行
	console.log('test file beforeAll...');
})

beforeEach(() => {
	// NOTE: 在这个文件中每个test执行前都会执行一次
	console.log('test file beforeEach...');
})

describe('increment', () => {

	beforeAll(() => {
		console.log('suite 1 beforeAll...');
	})

	beforeEach(() => {
		console.log('suite 1 beforeEach...');
	})

	test('increments the current number by 1', () => {
		expect(increment(0, 10)).toBe(1)
	})

	test('does not increment the current number over the max', () => {
		expect(increment(10, 10)).toBe(10)
	})

	test('has a default max of 10', () => {
		expect(increment(10)).toBe(10)
	})
})

describe('increment', () => {

	beforeAll(() => {
		console.log('suite 2 beforeAll...');
	})

	beforeEach(() => {
		console.log('suite 2 beforeEach...');
	})

	test('increments the current number by 1', () => {
		expect(increment(0, 10)).toBe(1)
	})
})