import GlobalRegistCom from "@/components/12-组件基础/动态组件/global-com.vue";
export default {
  install(app, opts) {
    // 配置应用级别的数据和方法
    app.config.errorHandler = (err, vm, info) => {
      alert(
        "请注意,捕获到了错误,编写的测试代码行为不符合预期可能与此错误有关!"
      );
      console.log(info, "info");
      console.log(vm, "vm");
      console.error(err, "error");
    };
    // 注册全局组件
    app.component("my-component", {
      template: /*html*/ `<div>my-component</div>`,
    });

    app.component("global-regist-com", GlobalRegistCom);
    // app.component("BlogPost", BlogPost1);
    // app.component("BlogPOST", BlogPost2);
  },
};
