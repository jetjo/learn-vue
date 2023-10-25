<template>
    <div>
        <!-- NOTE: Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 Map。
Ref 会使它的值具有深层响应性。-->
        <p>obj.nested.count: {{ obj.nested.count }}</p>
        <p><button @click=" mutateDeeply ">更新数据</button></p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const obj = ref( {
    nested: { count: 0 },
    arr: [ 'foo', 'bar' ]
} );
function mutateDeeply () {
    // 以下都会按照期望工作
    obj.value.nested.count++
    obj.value.arr.push( 'baz' )
    // NOTE: 非原始值将通过 reactive() 转换为响应式代理，
    console.log(obj);
}
</script>

<style lang="scss" scoped></style>
