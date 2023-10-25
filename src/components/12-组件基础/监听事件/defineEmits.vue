<template>
  <div>
    <!-- 不管在选项式还是组合式风格中,模版里总是可以访问$emit -->
    <button @click="$emit('add', 'hello world form template')">发射事件</button>
  </div>
</template>

<script setup>
// NOTE: emit等同与组件实例的$emit方法, 但$emit方法在setup语法糖模式下不可用
const emit = defineEmits(["add", "delete"]);
// 在setup阶段发射事件
emit("add", "hello world");
</script>
