<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 19:13:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 02:34:00
 * @FilePath: \vue3-music\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Vue 3 + TypeScript + Vite 个人基础模板

此模板只配置了项目基础文件，未安装 ui 库，其他 多余 js 库

1. 已配置路由，路由守卫
   src\router\index.ts
   index.ts 路由入口文件, permission.ts 路由守卫
2. pinia.持久化存储,
   src\states\index.ts
   添加新的模块直接在 states 文件夹下新建其他模块即可
3. axios 封装，
   src\http\index.ts
   src\http\modules 下为封装的 api 请求函数
4. scss 模块配置
   src\assets\css\globalStyle.scss 全局样式
5. 环境配置文件
   .env.dev
   .env.prod
   .env.test
   已在 package.json scripts 中配置 dev，prod，根据自己项目自行修改
6. 页面文件目录 pages
