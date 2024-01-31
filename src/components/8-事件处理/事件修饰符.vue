<template>
	<div>
		<ul>
			<li>
				<h5>.stop</h5>
				<p>阻止事件冒泡</p>
				, 相当于调用方法stopPropagation
			</li>
			<li>
				<h5>.prevent</h5>
				<p>阻止事件默认行为</p>
				,相当于调用方法preventDefault
			</li>
			<li>
				<h5>.self</h5>
				<p>只有事件在该元素本身（比如不是子元素）触发时才会触发事件</p>
				,即如果event.target 是当前绑定事件的元素时才调用事件处理函数
			</li>
			<li>
				<h5>.once</h5>
				<p>事件处理函数只调用一次,其后listener会被移除</p>
				, 相当于addEventListener(eventType, listener, {once: true})
			</li>
			<li>
				<h5>.capture</h5>
				<p>事件捕获</p>
				,相当于addEventListener(eventType, listener, {capture: true})
			</li>
			<li>
				<h5>.passive</h5>
				<p>
					告诉浏览器eventHandler中不会调用preventDefault方法,滚动事件的默认行为(滚动)应该
					立即执行,而非等待eventHandler执行完毕后再执行
				</p>
				,相当于addEventListener(eventType, listener, {passive: true})
				<p>所以,.passive修饰符不应该和.prevent修饰符同时使用;</p>
				<p>.passive修饰符多用于移动设备端的触摸事件,改善滚动性能.</p>
			</li>
		</ul>
	</div>
</template>
