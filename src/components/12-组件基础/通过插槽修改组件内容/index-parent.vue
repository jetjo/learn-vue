<template>
  <div>
    <ComBaseSlot>
      <!-- NOTE: 使用template标签时,插槽名称不可缺,即使是默认插槽 -->
      <template #default>
        <p>this is default</p>
      </template>
      <template #header>
        <h2>this is header</h2>
      </template>
      <template #body>
        <p>this is body</p>
      </template>
      <!-- NOTE: 直接报错: Extraneous children found when 
              component already has explicitly named default slot.
               These children will be ignored. -->
      <!-- <p>this is another default</p> -->
    </ComBaseSlot>
  </div>
</template>

<script setup>
import ComBaseSlot from "./index.vue";
</script>
