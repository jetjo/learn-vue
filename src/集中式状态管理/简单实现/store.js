import { reactive } from "vue";

const _store = ({
	count: 0,
	increment
})
function increment() {
	this.count++;
}
// // NOTE: 这样是可以改变状态,但是失去了响应性
// _store.increment = increment.bind(_store);

const store = reactive(_store);
_store.incrementTest = increment.bind(store);
export default store;