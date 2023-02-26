<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 19:20:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 01:41:49
 * @FilePath: \vue3-music\src\pages\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div>
    vue3-vite 基础模板:已配置路由，pinia.持久化存储,axios 封装，scss模块配置
  </div>
  <div>{{ textStore.getName }}</div>
  <div class="box">{{ count }}</div>
  <button @click="countStore.addCount">add</button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCount } from "@/states/count";
import { storeToRefs } from "pinia";
import { searchMusic } from "@/http/modules/login";
import { useText } from "@/states/text";

const countStore = useCount();
const { count } = storeToRefs(countStore);
const textStore = useText();

async function getData() {
  let res = await searchMusic({ keywords: "海阔天空" });
  console.log(res);
}

onMounted(() => {
  getData();
});
</script>

<style lang="scss">
.box {
  background-color: $mcolor;
}
</style>
