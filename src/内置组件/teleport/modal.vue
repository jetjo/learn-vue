<template>
  <Transition name="modal">
    <div v-if="show" class="mask">
      <div class="container">
        <div class="header">
          <slot name="header">modal header </slot>
        </div>
        <div class="body">
          <slot name="body">modal body</slot>
        </div>
        <div class="footer">
          <slot name="footer">
            <button class="default-btn" @click="$emit('close')">Close</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #3337;
  z-index: 9998;
  transition: opacity 0.3s ease;
  // NOTE: 必须加 形成BFC以容纳浮动元素
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 300px;
  // NOTE: 实现水平居中 配合父元素的flex实现垂直居中
  // NOTE: 与给父元素设置“align-items: center;justify-content: center;”一种效果
  //margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 0.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.header h3 {
  margin-top: 0;
  color: #42b983;
}

.body {
  margin: 20px 0;
}

.default-btn {
  float: right;
}
</style>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0.001;
}

.modal-enter-from .container,
.modal-leave-to .container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
