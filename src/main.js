import "./assets/main.css";

import { createApp } from "#vue";
import App from "./App.vue";
// import { BlogPost1, BlogPost2  } from "./components/12-组件基础/DOM模版注释事项/blog-post.js";

import i18nOpts from "./逻辑复用/插件/i18n-opts";
import i18nPlugin from "./逻辑复用/插件/i18n";
import globalConfPlugin from "./逻辑复用/插件/global-conf.js";
import registerDirective, {
	vGlobalFocus,
} from "./自定义指令/两种注册方式/方式二全局注册";
import vuetify from "./plugins/vuetify";

const app = createApp(App);
app.use(i18nPlugin, i18nOpts);
app.use(globalConfPlugin);
registerDirective(app, "global-focus", vGlobalFocus);
app.use(vuetify);
// 在浏览器开发者工具的‘性能/时间线’页面中启用对组件初始化、编译、渲染和修补的性能表现追踪
app.config.performance = true;
app.mount("#app");

// // 创建多个小的vue应用...
// const app2 = createApp({
//   template: /*html*/ `<div>multi vue app</div>`,
// });
// // app2.mount("#app2");
