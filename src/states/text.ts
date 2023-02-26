/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-27 01:34:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 01:47:19
 * @FilePath: \vue3-music\src\states\text.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

// 选项式 写法
export const useText = defineStore("text", {
  state: () => {
    return {
      firstName: "allen",
      lastName: "ttk",
      accessToken: "xxxxxxxxxxxxx",
    };
  },
  getters: {
    getName: (state) => state.firstName + state.lastName,
  },
  actions: {
    setToken(value: string) {
      this.accessToken = value;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        paths: ["firstName", "accessToken"], //指定要长久化的字段
      },
    ],
  },
});
