import { createApp, defineAsyncComponent } from "vue";
import { injectRouter } from "#utils";
import App from "./checkbox.vue";
const map = {
	"": App,
	radio: "./radio.vue",
	"checkbox-group": "./checkbox-group.vue",
	"checkbox-group-fix": "./checkbox-group-fix.vue",
	"radio-group": "./radio-group.vue",
	"radio-group-fix": "./radio-group-fix.vue",
};
console.log("map:", map);
injectRouter({ createApp, defineAsyncComponent, importUrl: import.meta.url })(
	map,
	"#app",
);

export {};
