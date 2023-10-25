<template>
    <div>
        {{ aState }}
    </div>
</template>

<script setup>
// const aState = ref(7);
// ref调用返回的对象相当于如下伪代码所示:
const aState = {
    _value: 7,
    get value () {
        // NOTE: 依赖收集, proxy具体时怎么将当前的effect与当前的ref关联起来的呢?
        track();
        return this._value;
    },
    set value ( nv ) {
        this._value = nv;
        trigger();
    }
}
function track () {
    // NOTE: 依赖收集
    console.log('track');
}
function trigger () {
    // NOTE: 触发更新
    console.log('trigger');
}
</script>
