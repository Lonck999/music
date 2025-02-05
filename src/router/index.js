import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    name: "Home",
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
    name: "About",
  },
  {
    path: "/manage",
    component: () => import("@/views/Manage.vue"),
    name: "Manage",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
