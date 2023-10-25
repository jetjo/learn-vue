<template>
  <div>
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      @click="currentTab = tab"
      :class="['tab-button', { active: currentTab === tab }]"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]">
      <template v-if="tabs[currentTab] === 'h3'"> 原生标签H3 </template>
      <pre>
vue特有组件component的is属性可以接受两种类型的值:
        1、字符串类型,此时字符串可能是全局注册的组件的名字,也可以是原生的标签名
        2、组件对象,可以是本地注册的,也可以是通过api及组件名获取到的
组件切换时,切换掉的组件会被卸载,可以配合KeepAlive组件使用以使组件被缓存.
      </pre>
    </component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LocalRegistCom from "./local-com.vue";
const tabs = {
  LocalRegistCom,
  GlobalRegistCom: "global-regist-com",
  NativeComH3: "h3",
};
// 持有tabs对象的属性名
const currentTab = ref("LocalRegistCom");
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
</style>
