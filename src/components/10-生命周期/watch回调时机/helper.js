function getInnerTextAfterColon(ele) {
	let _ele = ele;
	if (typeof _ele === "string") {
		_ele = document.querySelector(_ele);
		if (_ele == null) return `element not found: ${ele}`;
	}
	if (_ele == null) return "element is null!!!";

	const noColon = _ele.innerText.indexOf(":") === -1;
	return _ele.innerText.split(":")[noColon ? 0 : 1].trim();
}

export { getInnerTextAfterColon };
