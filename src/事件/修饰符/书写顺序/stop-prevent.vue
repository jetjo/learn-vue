<template>
	<div>
		<p><button>测试button默认的display</button></p>
		<p>
			<!-- NOTE: [Vue warn]: Missing ref owner context. ref cannot be used on hoisted vnodes.
				A vnode with ref must be created inside the render function.
			如果使用的vue是bundler版本,而不是browser版本,则不会这样 -->
			<a ref="aRef" id="a-for-test-display">测试a默认的display</a>
		</p>

		<p>
			<button @click="onButtonClick">
				<a @click.stop.prevent="doThat" href="//127.0.0.1:5173">Click Prevent</a>
			</button>
		</p>
		<p>
			<button @click="onButtonClick">
				<a @click.prevent.stop="doThat" href="//127.0.0.1:5173">Click Prevent</a>
			</button>
		</p>
		<p>
			<button @click="onButtonClick">
				<a @click.stop="doThat" href="//127.0.0.1:5173">Click Me</a>
			</button>
		</p>
		<p>
			<button @click="onButtonClick">
				<a @click.prevent="doThat" href="//127.0.0.1:5173">Click Prevent</a>
			</button>
		</p>

		<p>
			<form action='//127.0.0.1:5173'>
				<button>
					<span>Click Me</span>
				</button>
					<!-- <br/> -->
				<button>
					<span @click.prevent>Click Prevent</span>
				</button>
			</form>

			<p>
				<!-- <a class="block-a" href="//127.0.0.1:5173"><span class="span-block">Click Me</span></a> -->
				<a class="block-a" href="//127.0.0.1:5173"><span class="span-block" @click.stop>Click Me</span></a>
				<a class="block-a" href="//127.0.0.1:5173"><span class="span-block" @click.prevent>Click Prevent</span></a>
			</p>
		</p>

		<p><a href='#self-prevent'>测试self、prevent的书写顺序</a></p>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "#vue";

	console.log(import.meta.env, "node_env");

	const aRef = ref(null);

	onMounted(() => {
		if(aRef.value == null) aRef.value = document.getElementById("a-for-test-display");
		console.log(
			"a标签的display默认值: ",
			window.getComputedStyle(aRef.value,).display,
		);
	});

	/**@param {MouseEvent} e */
	function onButtonClick(e) {
		if (e.target === e.currentTarget) {
			console.log("outer button self clicked");
		} else {
			console.log("inner tag clicked");
		}
	}
	function doThat(e) {
		console.log("inner tag self clicked");
	}
</script>

<style lang="scss" scoped>
// NOTE: vue的global伪类无法嵌套
:global(.block-a) {
	display: block;
	margin: 10px 0;
	padding: 0;
}
:global(.span-block) {
	display: inline-block;
	background: #000;
	color: #fff;
}
</style>
