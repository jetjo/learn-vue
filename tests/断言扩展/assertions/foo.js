export function toBeFoo(received, expected = 'foo') {
	// console.log({ received, expected, thisObj: this });
	// NOTE: 是否是在not方法上调用的
	// 例如expect(received).not.toBeFoo()
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