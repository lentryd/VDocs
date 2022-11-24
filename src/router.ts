import parseDir from "./parseRouters";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const paths = require
  .context("@/pages", true, /\.\w+$/)
  .keys()
  .map((p) => p.replace(/^\./, ""));

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/blob",
    component: () => import("@/views/Blob.vue"),
    children: parseDir(paths),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior({ path, hash }, { path: path2 }, scroll) {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          if (!hash && !scroll) resolve({ top: 0, behavior: "smooth" });
          else if (scroll) resolve({ ...scroll, behavior: "smooth" });
          else resolve({ el: hash, top: 60, behavior: "smooth" });
        },
        path == path2 ? 0 : 300
      );
    });
  },
});

export default router;
