/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-18 20:49:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 02:16:32
 * @FilePath: \vue3-element-admin\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { RouteLocationNormalized, Router, _RouteRecordBase } from "vue-router";

// 路由白名单，不需要登陆即可使用
const whiteList = [""];

export function guard(router: Router) {
  // 进入前
  router.beforeEach(async (to, from, next) => {
    console.log("路由守卫：", to, from, next);
    next();
  });

  // 进入后
  router.afterEach((to: RouteLocationNormalized): void => {
    console.log("已进入页面", to);
  });
}
