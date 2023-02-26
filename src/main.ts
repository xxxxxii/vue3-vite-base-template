/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 19:13:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 02:17:07
 * @FilePath: \vue3-music\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style/style.css";
import App from "./App.vue";
import router, { setupRouter } from "./router";

import pinia from "./states";

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);
  app.use(pinia);
  // 路由准备好再挂载
  await router.isReady();
  app.mount("#app");
}

void bootstrap();
