import { createApp } from "vue";

import "./assets/styles/global.scss";
import App from "./App.vue";
import route from "./router";

const app = createApp(App);

app.use(route).mount("#app");
