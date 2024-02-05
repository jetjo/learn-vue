import { symbolUtil } from "#utils";

/**
 * @param {Symbol} typeId
 * @param {WeakMap} map
 */
function getHandler(typeId, map) {
	const handlers = map.get(typeId);
	if (handlers?.size > 0) {
		return function (...args) {
			handlers.forEach((h) => h.apply(this, args));
		};
	}
}

function getBeforeHandler(typeId) {
	return getHandler(typeId, beforeEachHandlers);
}
function getAfterHandler(typeId) {
	return getHandler(typeId, afterEachHandlers);
}

/**
 * @param {Symbol} typeId 非全局的Symbol
 * @param {(...args:any[]) => any} handler
 */
function wrapHandler(typeId, handler) {
	let before, after;
	if (symbolUtil.isNonRegSymbol(typeId)) {
		before = getBeforeHandler(typeId);
		after = getAfterHandler(typeId);
	}
	return function (...args) {
		before?.apply(this, args);
		handler.apply(this, args);
		after?.apply(this, args);
	};
}

// 订阅节点事件
function on(target, event, handler, typeId = undefined) {
	handler = wrapHandler(typeId, handler);
	if (typeof target === "string") {
		const css = target;
		const targets = document.querySelectorAll(css);
		if (targets.length === 0) {
			console.warn(`on函数用于绑定一个节点, 但是没有找到节点: ${css}`);
			return;
		}
		if (targets.length > 1) {
			console.warn(`on函数用于绑定一个节点, 但是找到了多个节点: ${css}`);
		}
		[target] = targets;
	}
	target.addEventListener(event, handler);
}

function onAll(targets, event, handler) {
	if (typeof targets === "string") {
		const css = targets;
		targets = document.querySelectorAll(css);
		if (targets.length === 0) {
			console.warn(`onAll函数用于绑定多个节点, 但是没有找到节点: ${css}`);
			return;
		}
		if (targets.length === 1) {
			console.warn(`onAll函数用于绑定多个节点, 但是只找到了一个节点: ${css}`);
		}
	}
	targets.forEach((target) => {
		target.addEventListener(event, handler);
	});
}

function onEach(typeId, handler, map) {
	let type = map.get(typeId);
	if (type == null) {
		map.set(typeId, (type = new Set()));
	}
	type.add(handler);
}

const beforeEachHandlers = new WeakMap();
function onBeforeEach(typeId, handler) {
	onEach(typeId, handler, beforeEachHandlers);
}

const afterEachHandlers = new WeakMap();
function onAfterEach(typeId, handler) {
	onEach(typeId, handler, afterEachHandlers);
}

export { on, onAll, onBeforeEach, onAfterEach };
