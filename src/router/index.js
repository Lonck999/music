import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    name: "home",
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
    name: "about",
  },
  {
    path: "/manage",
    component: () => import("@/views/Manage.vue"),
    name: "manage",
  },
  {
    path: "/:catchAll(.*)*", // 這是為了讓我們的 router 可以匹配到所有的路徑，如果沒有匹配到任何的路徑，就會顯示 404 的頁面
    component: () => import("@/views/NotFound.vue"),
    name: "404",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500", // 這是為了讓我們的 link 在 active 的時候，有個特別的 class
});

export default router;
