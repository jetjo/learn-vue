import { it, expect as expectGlobal } from "vitest";

it('上下文概念', (ctx) => {
	// NOTE: 第一个参数或者每个测试回调是一个上下文
	// 1、ctx.task是一个包含当前测试的元数据的只读对象
	console.log(`ctx of ${ctx.task.name}: `, ctx);
})

it.concurrent('绑定到当前上下文的expect api', ({ expect }) => {
	// 2、相比于全局导入的expect,
	// 绑定到当前上下文的expect api可以更好的支持测试的并行执行,
	// 例如并行运行快照测试, 全局导入的expect无法跟踪
	expect(2 * 2).toMatchInlineSnapshot('4');
})

it('跳过后续测试,并标记为已跳过', ({ skip }) => {
	skip();
	expect(2 + 2).toBe(5);
})

it.concurrent('绑定到当前上下文的expect api', ({ expect }) => {
	// 2、...
	expect(2 * 2).toMatchInlineSnapshot('4');
})

it('访问扩展的断言方法', ({ expect }) => {
	// 3、...
	expect('foo').toBeFoo();
	// NOTE:
	// TypeError: expect.toBeFoo is not a function
	// expect.toBeFoo();
	const test = expectGlobal.toBeFoo();
	console.log('expectGlobal.toBeFoo(): ', test);
})