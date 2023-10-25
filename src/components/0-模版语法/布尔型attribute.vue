<template>
    <div>
        <!-- NOTE: flag是空字符串时,disabled属性也存在!!! -->
        <button :disabled=" flag ">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const flag = ref( '' );
</script>
