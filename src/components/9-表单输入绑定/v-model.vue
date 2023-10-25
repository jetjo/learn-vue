<template>
    <div>
        <form action="">
            <div>
                <label for="input-1">input-text:</label>
                <!-- v-model绑定value属性,侦听input事件 -->
                <input id="input-1" type="text" v-model=" inputText ">
            </div>
            <div>
                <label for="textarea-1">textarea:</label>
                <!-- v-model绑定value属性,侦听input事件 -->
                <textarea id="textarea-1" v-model=" textarea "></textarea>
            </div>
            <div>
                <!-- v-model绑定checked属性,侦听change事件 -->
                <label for="checkbox-1">苹果:</label>
                <input name="checkbox-value" id="checkbox-1" type="checkbox" v-model=" checkboxValue " value="apple">
                <label for="checkbox-2">香蕉:</label>
                <input name="checkbox-value" id="checkbox-2" type="checkbox" v-model=" checkboxValue " value="banana">
            </div>
            <div>
                <!-- v-model绑定value属性,侦听change事件 -->
                <label for="radio-1">舒畅:</label>
                <input name="fucker" id="radio-1" value="Jennifer" type="radio" v-model=" fucker ">
                <label for="radio-2">刘亦菲:</label>
                <input name="fucker" id="radio-2" value="Liu Yifei" type="radio" v-model=" fucker ">
            </div>
            <div>
                <!-- v-model绑定value属性,侦听change事件 -->
                <label for="wife">妻子:</label>
                <select name="wife" id="wife" v-model=" wife ">
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
import { ref } from 'vue';

const inputText = ref( 'input text value' );
const textarea = ref( 'textarea value' );
const checkboxValue = ref( [ 'banana', 'orange' ] );
const fucker = ref( 'Jennifer' );
const wife = ref( 'Shuchang' )
</script>

<style lang="scss" scoped>
input[type],
textarea {
    margin-left: .5em;
    border-width: .001px;
    border-radius: .5em;
    border-color: #bbb5ac;
    padding: .5em .3em;
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
<style lang="secc" scoped>

</style>
