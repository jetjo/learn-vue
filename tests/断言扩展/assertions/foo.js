export function toBeFoo(received, expected = 'foo') {
	// console.log({ received, expected, thisObj: this });
	// NOTE: `isNot`: 是否是在not方法上调用的
	// 例如`expect(received).not.toBeFoo()`
	// `promise`: 是否是在`resolves`或者`rejects`方法上调用的
	// 例如`expect(Promise.resolve('foo')).resolves.toBeFoo()`, 那么
	// `promise`为字符串'resolves'
	const { isNot, promise } = this;
	console.log({ received, expected, isNot, promise });
	// NOTE: 不能根据isNot来判断是否通过测试!!!
	const pass = received === 'foo';
	const message = () => `${received} is ${isNot ? 'not ' : ''} foo`;
	return {
		pass,
		message,
		// // 两个可选参数
		// actual,
		// received
	};
}