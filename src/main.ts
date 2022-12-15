import { createApp } from "vue";
import "normalize.css";
import "element-plus/dist/index.css";

import router from "./router";
import pinia from "@/stores";
import App from "./App.vue";
const app = createApp(App);

app.use(router).use(pinia);
app.mount("#app");
