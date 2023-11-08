import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";

// #region 被测试代码
const businessHours = [9, 17]
const OKMSG = { message: 'Success' };

function purchase() {
	const currentHour = new Date().getHours()
	const [open, close] = businessHours

	if (currentHour > open && currentHour < close)
		return OKMSG

	return { message: 'Error' }
}
// #endregion

describe('purchasing flow', () => {
	beforeEach(() => {
		// 告诉vitest,在每一个test时,使用时间仿真,
		// 即如果被测试代码中调用Date.now时,返回设置的仿真时间;
		// 换句话说,控制被测代码的时间,确保每次测试的时间一致性.
		vi.useFakeTimers();
	})

	afterEach(() => vi.useRealTimers())

	it('allows purchases within business hours', () => {
		// set hour within business hours
		const date = new Date(2000, 1, 1, 13)
		vi.setSystemTime(date)

		expect(purchase()).toEqual(OKMSG)
	})

	it('disallows purchases outside of business hours', () => {
		// set hour outside business hours
		const date = new Date(2000, 1, 1, 19)
		vi.setSystemTime(date)

		// access Date.now() will result in the date set above
		expect(purchase()).toEqual({ message: 'Error' })
	})
})