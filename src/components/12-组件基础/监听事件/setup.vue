<template>
  <div>
    <!-- 不管在选项式还是组合式风格中,模版里总是可以访问$emit -->
    <button @click="$emit('add', 'hello world form template directly')">
      发射事件
    </button>
    <button @click="onClick(false)">从方法发射事件</button>
    <button @click="onClick(true)">从方法发射事件</button>
  </div>
</template>

<script>
export default {
  emits: ["add", "delete"],
  setup(props, ctx) {
    ctx.emit("add", "hello world from setup");
    return {
      emit__: ctx.emit,
    };
  },
  methods: {
    onClick(isSetup) {
      if (isSetup) {
        this.emit__("add", "hello world from method use ctx.emit");
      } else {
        this.$emit("add", "hello world from method use this.$emit");
      }
    },
  },
};
</script>
