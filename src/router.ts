import VueRouter, { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "../src/pages/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

export default route;
