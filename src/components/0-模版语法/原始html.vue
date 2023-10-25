<template>
    <div>
        <!-- 双大括号的文本插值将`rawhtml`的值视为纯字符串, 拼接为innerText的一部分 -->
        <p>using text interpolation: {{ rawHtml  }}</p>
        <!-- v-html指令将`rawHtml`的值与span元素的innerHtml属性保持同步, `rawhtml`的值会被视为html片段解析 -->
        <!-- NOTE: 使用v-html容易产生`XSS漏洞` -->
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
</template>

<script setup>
const rawHtml = /*html*/`<span style="color: red">This should be red.</span>`;
</script>
