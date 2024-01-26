<template>
	<div>
		<ul>
			<li>
				1、作为 reactive 对象的属性
				<p>
					一个 ref
					会在作为响应式对象的属性被访问或修改时自动解包。换句话说，它的行为就像一个普通的属性：
				</p>
				<p>
					如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的
					ref：
				</p>
				<p>
					只有当嵌套在一个深层响应式对象内时，才会发生 ref
					解包。当其作为浅层响应式对象的属性被访问时不会解包。
				</p>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { ref, reactive, onMounted } from "#vue";
	const count = ref(0);
	const state = reactive({ count });
	onMounted(() => {
		console.log(state.count === count, "作为 reactive 对象的属性");
		console.log(state.count, "作为 reactive 对象的属性");
		state.count = 3;
		console.log(count.value, "作为 reactive 对象的属性");
	});

	// 如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：
	// const otherCount = ref(2)

	// state.count = otherCount
	// console.log(state.count) // 2
	// // 原始 ref 现在已经和 state.count 失去联系
	// console.log(count.value) // 1
</script>
