/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 14:29:41
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 02:26:40
 * @FilePath: \react-admin\src\http\modules\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from "../index";

export const searchMusic = (data: any) => {
  return http.get("search", data);
};
