<template>
    <div>
<ul>
    <li>1、如果要按条件渲染一个Html片段而非单个元素,可以与template配合使用,
        <br>
        template只是一个不可见的vue包装器,不会有UI渲染负担
    </li>
    <li>2、v-if可以和template标签一起使用,而v-show不能</li>
    <li>3、初次渲染UI时,如果v-if表达式的值为假,则对应的标签或html片段
        <br> 不会渲染,只有当v-if表达式的值初次为真时才渲染,即v-if是<i>惰性的</i>;
        <br>而v-show,不论表达式的值是真假,都会渲染,只是渲染后会根据表达式的值来改变元素
        <br>的display属性以实现显隐.
    </li>
    <li>总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。

    </li>
</ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
