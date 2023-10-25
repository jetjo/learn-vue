<template>
  <div>
    <!-- NOTE: 没有从setup方法返回props,是否可用??? -->
    <!-- {{ props.title }} props未定义 -->
    <!-- {{ this.title }} -->
    {{ props.title }}
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
  setup(props) {
    console.log(props);
    // NOTE: 是否需要返回props???
    // 可以不返回,但是如果不返回,父组件传递过来的属性就需要通过this访问了,
    // 不过这也无所谓,毕竟这就是选项式组件
    // return {};
    return { props };
  },
};
</script>
