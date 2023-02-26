/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 20:30:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 01:45:48
 * @FilePath: \vue3-music\src\states\count.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";

// 创建 store，并暴露出去
// 参数一：名字，必填值且唯一
// 参数二：组合式书写方式采用函数形式
export const useCount = defineStore(
  "count",
  () => {
    // ref 变量  --->  state
    // computed() 计算属性  --->  getters
    // functions 函数  --->  actions

    let count: Ref<number> = ref(0);

    const getCount = () => {
      return count;
    };
    const addCount = () => {
      count.value++;
    };

    return {
      // 暴露出去 变量，函数，计算属性即可
      getCount,
      addCount,
      count,
    };
  },
  {
    // 开启数据缓存
    persist: {
      enabled: true,
      strategies: [
        {
          storage: sessionStorage,
          paths: ["count"], //指定要长久化的字段
        },
      ],
    },
  }
);
