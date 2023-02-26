/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 22:25:04
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 01:23:54
 * @FilePath: \vue3-music\src\components\message\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//      引入创建虚拟节点和渲染方法
import { createVNode, render } from "vue";
import message from "./message.vue";

//      定义一个div容器
const div = document.createElement("div");
//      将定义的容器添加到dom上
document.body.appendChild(div);

//      定义定时器：一定时间后清除
let timer: any = null;

export default ({ str, type }: any) => {
  //      调用创建虚拟节点方法
  //      第一个参数为要创建的虚拟节点即编写好的vue组件
  //      第二个参数为props的参数
  const vnode = createVNode(message, { str, type });
  //      调用渲染方法：将虚拟节点渲染到dom中
  render(vnode, div);
  //      开启定时器，若原先存在则先进行清除
  timer && clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div);
  }, 2000);
};
