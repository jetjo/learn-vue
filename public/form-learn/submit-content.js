// import "./submit-content.css";

function showSubmitContent(form, prevent = true) {
	// load css
	loadCss();
	if (typeof form === "string") {
		form = document.querySelector(form);
	}
	/**@type {HTMLElement} */
	const logEle = document.createElement("pre"); //使用pre标签,保持innerText的换行
	logEle.classList.toggle("submit-content");
	/**@type {HTMLElement} */
	const _form = form;
	// 将logEle作为form的兄弟节点,放在form后面
	_form.parentNode.insertBefore(logEle, _form.nextSibling);
	requestAnimationFrame(() => {
		// 设置logEle的样式, 默认是隐藏的
		logEle.style.display = "none";
		logEle.style.position = "fixed";
	});
	const getNameValuePairs = () => {
		const data = new FormData(_form);
		const pairs = [];
		for (let [name, value] of data) {
			pairs.push(`${name}=${value}\r`);
		}
		return pairs;
	};
	const displaySubmitContent = () => {
		const pairs = getNameValuePairs();
		logEle.innerText = pairs.join("");
		logEle.style.display = "block";
		setTimeout(() => {
			logEle.style.display = "none";
		}, 5000);
	};
	_form.addEventListener("submit", function (e) {
		prevent && e.preventDefault();
		displaySubmitContent();
	});
}

// 写一个动态加载css的函数
function loadCss(url = "/form-learn/submit-content.css") {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = url;
	document.head.appendChild(link);
}

export { showSubmitContent };
