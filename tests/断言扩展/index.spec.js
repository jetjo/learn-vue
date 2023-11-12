import { it, expect } from "vitest";

it('测试扩展的断言', () => {
	expect('foo').toBeFoo('no use');
})

it('测试断言上下文的isNot属性', () => {
	expect('bar').not.toBeFoo();
})

it('在测试上下文中获取断言上下文元数据', (ctx) => {
	const assertCtx = ctx.expect.getState();
	const { currentTestName, testPath } = assertCtx;
	console.log({ currentTestName, testPath });
	// ctx.skip();
})

it('对`asynchronous matcher`的理解', async () => {
	// 对`asynchronous matcher`的错误理解
	// await expect(Promise.resolve('foo')).toBeAsyncFoo();
	// `asynchronous matcher`是指断言方法`toBeAsyncFoo`返回的是一个promise
	// await是在等待`toBeAsyncFoo`,而不是等待`expect`的回调参数
	await expect('foo').toBeAsyncFoo();
})

it('测试断言上下文promise属性的含义(在`toBeFoo`中打印了this.promise)', () => {
	// NOTE: 在`toBeFoo`中打印了this.promise
	expect(Promise.resolve('foo')).resolves.toBeFoo();
	expect(Promise.reject('foo')).rejects.toBeFoo();
	expect((async () => {
		// 模拟从远程服务器获得响应
		const res = await new Promise((res) => {
			setTimeout(() => {
				res('foo');
			}, 0);
		})
		// return res;
		throw 'foo'
		// throw new Error('foo')
		// })()).resolves.toBeFoo();
	})()).rejects.toBeFoo();
	// })()).rejects.message.toBeFoo();//error fuck
})