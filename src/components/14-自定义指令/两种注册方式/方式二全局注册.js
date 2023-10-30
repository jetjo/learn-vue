/** 要在app.mount之前调用 */
function registerDirective(app, vdName, vd) {
	// 在标签中使用时,是v-vd-name形式,以v-开头,后跟vdName的kebab-case形式
	app.directive(vdName, vd)
	// app.directives(vd)
}

export const vGlobalFocus = {
	mounted(el) {
		el.focus()
	}
}

export default registerDirective;