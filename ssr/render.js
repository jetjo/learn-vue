import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
// TypeError [ERR_UNKNOWN_FILE_EXTENSION]
// import App from "./App.vue";
import App from "./app.js"

const app = createSSRApp(App);

renderToString(app).then(htm => {
	console.log(htm);
})