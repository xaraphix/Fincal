import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./Routes";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
