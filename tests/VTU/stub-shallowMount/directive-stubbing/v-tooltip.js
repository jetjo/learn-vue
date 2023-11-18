export default {
	// Sometimes directives do quite complex things,
	// like perform a lot of DOM manipulation which
	// might result in errors in your tests
	// (due to JSDOM not resembling entire DOM behavior).
	// A common example is tooltip directives from various libraries,
	// which usually rely heavily on measuring DOM nodes position/sizes.
	beforeMount(el) {
		console.log('directive called')
		el.classList.add('with-tooltip')
	},
	mounted() {

	}
}