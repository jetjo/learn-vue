import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

// #region 被测代码
import { executeAfterTwoHours, executeAfter200ms, executeEveryMinute } from "../../src/utils/timers";
// #endregion

const mock = vi.fn(() => console.log('executed~'))

describe('delayed execution', () => {
	beforeEach(() => {
		vi.useFakeTimers({
			loopLimit: 100
		});
	})

	afterEach(() => {
		// 两个方法都能清除一个spy上的调用记录
		// 但是reset会将mock赋值为vi.fn(() => {})
		// vi.resetAllMocks();
		vi.clearAllMocks();
	})

	it('should execute the function', () => {
		executeAfterTwoHours(mock);
		// 如果计时器列队中有callback,则取出并执行,不论其本应该在何时执行.
		vi.runAllTimers();
		expect(mock).toHaveBeenCalledTimes(1);
	})

	it('should not execute the function', () => {
		executeAfter200ms(mock);
		// 模拟延时199ms
		vi.advanceTimersByTime(199);
		expect(mock).not.toHaveBeenCalled();
		// 结合前面的延时199ms,总延时200ms
		vi.advanceTimersByTime(1);
		// 200ms后清理mock的call records,
		// 因为200ms前mock还未被调用,清理无意义
		mock.mockClear();
		// mock.mockReset();
		executeAfterTwoHours(mock);
		vi.advanceTimersByTime(1000 * 60 * 60 * 2 - 1);
		expect(mock).not.toHaveBeenCalled();
	})

	it('should execute per min', () => {
		let mockTH = executeEveryMinute(mock);
		vi.advanceTimersToNextTimer();
		expect(mock).toHaveBeenCalledTimes(1);
		vi.advanceTimersToNextTimer()
			.advanceTimersToNextTimer();
		expect(mock).toHaveBeenCalledTimes(3);
		// let mockTH = 0;

		// NOTE: 如果不清理上次的timer,并且上次的interval timer没有退出机制的话
		// ,那么在call `runAllTimers`后会被执行`fakeTimers.loopLimit`次
		clearInterval(mockTH);
		let i = 0;
		mock.mockImplementation(() => {
			// mock.mockImplementationOnce(() => {
			// NOTE: 如果mock once only, 那么下一个定时到来后又会执行原来的mock
			if (i > 1) {
				// NOTE: 虽然这次后清理了timer,但这也算一次执行
				clearInterval(mockTH);
				return;
			}
			console.log('executed!');
			i++;
		})
		mockTH = executeEveryMinute(mock);
		vi.runAllTimers();
		// vi.advanceTimersByTime(1000 * 60 * 1);
		// vi.advanceTimersByTime(1000 * 60 * 1);
		// vi.advanceTimersByTime(1);
		expect(mock).toHaveBeenCalledTimes(6);
	})
})