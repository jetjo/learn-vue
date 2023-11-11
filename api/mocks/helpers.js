// Uncaught ReferenceError: process is not defined ???
// const baseURL = process !== undefined ? process.env.baseURL : import.meta.env.VITE_BASE_URL;

// const baseURL = import.meta.env.VITE_BASE_URL;
// NOTE: 经测试,要想使用baseURL,目前必须在终端中定义变量baseURL,
// 在.env文件中定义的不起作用
// 而且必须在终端中执行export baseURL,
// 否则从终端启动的node进程中,process.env.baseURL是undefined
// const baseURL = typeof process !== 'undefined' ? process.env.baseURL : import.meta.env.VITE_BASE_URL;
const baseURL = import.meta.env.VITE_BASE_URL;

// console.log('process.env: ', process.env);
// console.log('process.env.baseURL: ', process.env.baseURL);
export function getBaseURL(isNdeEnv = true) {
	if (!baseURL) {
		// global-conf.js:11 ReferenceError: process is not defined
		// if (!process.env.baseURL) {
		throw new Error("baseURL is not configured");
	}
	// global-conf.js:11 ReferenceError: process is not defined
	// const baseDir = location ? location.origin : process.env.baseURL;
	// 如果是浏览器环境
	if (!isNdeEnv && typeof process === 'undefined') {
		return baseURL;
	}
	if (typeof location !== 'undefined') {
		// console.warn('location: ', location);
		return location.origin;
	}
	// console.warn('baseURL: ', baseURL);
	return baseURL;
}