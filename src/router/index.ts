/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 19:18:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 02:12:26
 * @FilePath: \vue3-music\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { guard } from "./permission";

// 1. 定义路由组件
const Main = {
  render() {
    return "vue3-vite 基础模板:已配置路由，pinia";
  },
};

// 2. 定义一些路由：每个路由都需要映射到一个组件。
const routes = [
  {
    path: "/",
    // 路由懒加载
    component: () => import("../pages/home/index.vue"),
  },
  {
    path: "/main",
    component: Main,
  },
  {
    path: "/text",
    component: () => import("@/pages/text/index.vue"),
  },
];

// 3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: routes, // `routes: routes` 的缩写
  scrollBehavior: (to, from, savedPosition) => {
    console.log("to: ", to);
    console.log("from: ", from);
    console.log("savedPosition: ", savedPosition);
    return { left: 0, top: 0 };
  },
});
export function setupRouter(app: App) {
  app.use(router);
  guard(router);
}

export default router;
