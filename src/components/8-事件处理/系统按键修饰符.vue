<template>
	<div>
		系统按键,可能理解为需配合其他按键使用的键,单独使用没有数据输入效果,
		有以下四个:
		<ul>
			<li>.shift</li>
			<li>.ctrl</li>
			<li>.alt</li>
			<li>
				.mate
				<p>MacOS上的Command键或者Windows上的windows键</p>
			</li>
			<input
				@keyup.shift="onKeyup"
				type="text"
				placeholder="监听包含shift keyup"
			/>
			<input
				@keyup.ctrl="onKeyup"
				type="text"
				placeholder="监听包含ctrl keyup"
			/>
			<input @keyup.alt="onKeyup" type="text" placeholder="监听包含alt keyup" />
			<input
				@keyup.meta="onKeyup"
				type="text"
				placeholder="监听包含command keyup"
			/>
			<p>
				当应用于keyup事件时: <br/>
				这些修饰符的的意思是,按下这些键的同时抬起别的键,才可能会触发事件; <br/>
				NOTE: 和keydown及其他事件不同,keyup事件中,单独抬起这些键,不会触发事件;
			</p>
		</ul>
		<p>
			特殊按键修饰符.exact, 修饰键中仅仅按下指定的修饰键时才能触发:
			<input
				type="text"
				@keydown.shift.exact="onKeydown"
				placeholder="按住shift,再按其他键"
			/>
		</p>
		<p>
			<p>按下得键中包含shift即可触发事件; <br/> 和keyup事件不同,单独按下shift也可以触发事件: </p>
			<input
				type="text"
				@keydown.shift="onKeydown"
				placeholder="首先仅仅按住shift"
			/>
		</p>
	</div>
</template>

<script setup>
	/** @param e { KeyboardEvent } */
	function onKeyup(e) {
		console.log("抬起的物理按键的值: ", e.key);
	}
	/** @param e { KeyboardEvent } */
	function onKeydown(e) {
		console.log("按下的物理按键的值: ", e.key);
	}
</script>
