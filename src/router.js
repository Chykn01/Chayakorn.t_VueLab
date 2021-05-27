import { createRouter, createWebHistory } from "vue-router";
import main from "@/page/main.vue";
import Detail from "@/page/detail.vue";

const routes = [
  { path: "/", name: "home", component: main },
  { path: "/device", name: "device", component: Detail }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
