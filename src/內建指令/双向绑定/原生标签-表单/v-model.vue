<template>
	<div>
		<pre>
				v-model作为一种内建指令,可以结合两种使用情形学习:
				1、当v-model应用在表单元素上时,vue会可能自动调整了v-model
					 指令的参数名,比如在input、textarea、select元素上使用v-model时,
					 如果不设置v-model的参数名,那么vue会自动将v-model的参数名设置为value
				2、当v-model应用在vue组件上时,如果不设置v-model的参数名,
					 那么vue会自动将v-model的参数名设置为modelValue
				3、并且在原生表单元素上使用时,可能由于vue的自动适配,对于不同的表单元素,
					 v-model会监听不同类型的有关绑定属性值更新的事件,并更新绑定属性值,
					 比如input,由于vue的自动调整,可能在v-model指令的钩子中借助钩子的第一个参数(input元素),
					 监听了input事件,并在事件handler中更新了input元素的value属性值
			</pre
		>
		<form action="">
			<div>
				<label for="input-1">input-text:</label>
				<!-- v-model绑定value属性,侦听input事件 -->
				<input id="input-1" type="text" v-model="inputText" />
			</div>
			<div>
				<label for="textarea-1">textarea:</label>
				<!-- v-model绑定value属性,侦听input事件 -->
				<textarea id="textarea-1" v-model="textarea"></textarea>
			</div>
			<div>
				<!-- v-model绑定checked属性,侦听change事件 -->
				<label for="checkbox-1">苹果:</label>
				<input
					name="checkbox-value"
					id="checkbox-1"
					type="checkbox"
					v-model="checkboxValue"
					value="apple"
				/>
				<label for="checkbox-2">香蕉:</label>
				<input
					name="checkbox-value"
					id="checkbox-2"
					type="checkbox"
					v-model="checkboxValue"
					value="banana"
				/>
			</div>
			<div>
				<!-- v-model绑定value属性,侦听change事件 -->
				<label for="radio-1">舒畅:</label>
				<input
					name="fucker"
					id="radio-1"
					value="Jennifer"
					type="radio"
					v-model="fucker"
				/>
				<label for="radio-2">刘亦菲:</label>
				<input
					name="fucker"
					id="radio-2"
					value="Liu Yifei"
					type="radio"
					v-model="fucker"
				/>
			</div>
			<div>
				<!-- v-model绑定value属性,侦听change事件 -->
				<label for="wife">妻子:</label>
				<select name="wife" id="wife" v-model="wife">
					<!-- <select name="wife" id="wife" v-model=" wife " multiple> -->
					<!-- NOTE: 假如v-model绑定的状态不匹配任何一项,select会被渲染成
                    ‘未选择’状态,在ios上将导致第一项无法再被选中,所以将第一项作为一个空值的禁用项,
                    而不是一个业务项,以防万一 -->
					<option disabled value="">请选择今晚艹谁</option>
					<option value="Jennifer">舒畅</option>
					<option value="Shuchang">畅小兔</option>
					<option value="Liu Yifei">刘亦菲</option>
				</select>
			</div>
		</form>
	</div>
</template>

<script setup>
	import { ref } from "#vue";

	const inputText = ref("input text value");
	const textarea = ref("textarea value");
	const checkboxValue = ref(["banana", "orange"]);
	const fucker = ref("Jennifer");
	const wife = ref("Shuchang");
</script>

<style lang="scss" scoped>
	input[type],
	textarea {
		margin-left: 0.5em;
		border-width: 0.001px;
		border-radius: 0.5em;
		border-color: #bbb5ac;
		padding: 0.5em 0.3em;
	}
</style>
<!-- <style lang="scss" scoped>
:global {
    input[type=text] {
        margin-left: .5em;
        border-width: .001px;
        border-radius: .5em;
        border-color: #bbb5ac;
        padding: .5em .3em;
    }
}
</style> -->
<!-- NOTE: 假如任何style标签内除了空白字符和换行符
之外没有任何内容(包括注释), 那么渲染出的组件的内部标签上
不会带有类似data-v-7a7a37b1这样的属性名 -->
<style lang="scss" scoped></style>
