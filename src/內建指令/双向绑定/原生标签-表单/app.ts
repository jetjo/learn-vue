import { createApp, defineAsyncComponent } from "vue";
import { injectRouter } from "#utils";
import App from "./checkbox.vue";
import type { Com_Map } from "#utils/router-c.d.ts";

const map: Com_Map = {
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
