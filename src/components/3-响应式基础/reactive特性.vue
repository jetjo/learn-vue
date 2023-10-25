<template>
    <div>
        <ul>
            <li>1、访问代理一致性 , 用同一原始对象多次调用reactive,返回同一个proxy </li>
            <li>2、不能持有如 string、number 或 boolean 这样的原始类型。</li>
            <li>3、不能替换整个对象</li>
            <li>4、对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：</li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const rawState = { count: 0 };
let state1 = reactive( rawState );
const state2 = reactive( rawState );
console.log( state1 === state2, '访问代理一致性' );
// 对嵌套对象也适用
const nestedRaw = {};
state1.nested = nestedRaw;
console.log( state1.nested === nestedRaw, '对嵌套对象也适用' );

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state1 = reactive( { count: 1 } )

// 当解构时，count 已经与 state.count 断开连接
let { count } = state1
// 不会影响原始的 state
count++

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
// callSomeFunction(state.count)
</script>

<style lang="scss" scoped></style>
