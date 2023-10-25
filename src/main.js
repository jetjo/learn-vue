import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
// import { BlogPost1, BlogPost2  } from "./components/12-组件基础/DOM模版注释事项/blog-post.js";

import i18nOpts from "./逻辑复用/插件/i18n-opts.json";
import i18nPlugin from "./逻辑复用/插件/i18n";
import globalConfPlugin from "./逻辑复用/插件/global-conf.js";

const app = createApp(App);
app.use(i18nPlugin, i18nOpts);
app.use(globalConfPlugin);
app.mount("#app");

// // 创建多个小的vue应用...
// const app2 = createApp({
//   template: /*html*/ `<div>multi vue app</div>`,
// });
// // app2.mount("#app2");
