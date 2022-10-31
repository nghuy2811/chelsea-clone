import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/styles/global.scss";
import App from "./App.vue";
import route from "./router";

const app = createApp(App);

app.use(createPinia()).use(route).mount("#app");
