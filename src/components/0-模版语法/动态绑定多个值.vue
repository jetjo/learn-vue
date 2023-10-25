<template>
    <div v-bind="attr">动态绑定多个值</div>
</template>

<script setup>
    const attr = {
        id: 'box',
        class: 'box',
    }
</script>

<style lang="scss" scoped>
 #box {
    background: #ffc90c;
 }
 .box {
    color: #88f;
 }
</style>
