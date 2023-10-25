<template>
    <div>
        <ul>
            <li>3、在模版中解包的注意事项
                <!-- TODO: -->
                <p>在模版渲染上下文中只有顶级的ref属性才会自动被解包</p>
                <p>docs[0].value: {{ docs[ 0 ].value }}</p>
                <p>map.get("foo").value: {{ map.get( "foo" ).value }}</p>
                <br>
                <p>count + 1: {{ count + 1 }}</p>
                <p>state.id + 1: {{ state.id + 1 }}</p>
                <br>
                <p>rawState.id + 1: {{ rawState.id + 1 }}</p>
                <p>state.id.value + 1: {{ state.id.value + 1 }}</p>
                <p>rawState.id.value + 1: {{ rawState.id.value + 1 }}</p>
                <br>
                <p>id + 1: {{ id + 1 }}</p>
                <!-- id确实是number -->
                <!-- <p>typeof id: {{ typeof id }}</p> -->
                <p>rawId + 1: {{ rawId + 1 }}</p>
                <!-- rawId是RefImpl, 这里自动解包了 -->
                <!-- <p>typeof rawId: {{ typeof rawId }}</p> -->
                <br>
                <!-- <p>state.id: {{ state.id }}</p> -->
                <!-- 仅是文本插值的一个便利特性，等价于 {{ rawState.id.value }} -->
                <p>rawState.id: {{ rawState.id }}</p>
                <p>rawState.id.value: {{ rawState.id.value }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const docs = reactive( [ ref( 'Vue 3 Guid' ) ] );
const map = reactive( new Map( [ [ 'foo', ref( 0 ) ] ] ) );

const count = ref( 0 );
const state = reactive( { id: count } );
const { id } = state;//NOTE: 作为reactive属性的RefImpl, 被访问会自动解包,即使不是在模版中访问
const id1 = state.id;
console.log( 'id === count: ', id === count );// false
console.log( 'id: ', id );//0
console.log( 'id1: ', id1 );//0
console.log( 'count: ', count );//RefImpl// 不自动解包
console.log('state.id: ', state.id);// NOTE: 作为reactive属性的RefImpl, 被访问会自动解包,即使不是在模版中访问
const rawState = { id: count };
const { id: rawId } = rawState;
console.log( 'rawId === count: ', rawId === count );// true
console.log( 'rawId: ', rawId );// RefImpl

console.log('typeof id: ' , typeof id);
console.log('typeof rawId: ', typeof rawId);

rawId.value = 7;
console.log( 'count.value: ', count.value );
</script>
