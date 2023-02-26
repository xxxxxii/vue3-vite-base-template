/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 13:33:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 01:24:48
 * @FilePath: \react-admin\src\http\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import message from "@/components/message";

const config = {
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 10000,
  // 跨域时允许携带凭证
  withCredentials: true,
};

export interface Result {
  code: number | string;
  msg: string;
}

export interface ResultData<T = any> extends Result {
  data?: T;
}

export const checkStatus = (status: number): void => {
  switch (status) {
    case 400:
      message({ type: "warn", str: "请求失败！" });
      break;
    case 401:
      message({ type: "warn", str: "请求失败！" });
      break;
    case 403:
      message({ type: "warn", str: "当前账号无权限访问！" });
      break;
    case 404:
      message({ type: "warn", str: "访问的资源不存在！" });
      break;
    case 405:
      message({ type: "warn", str: "请求方式错误！" });
      break;
    case 408:
      message({ type: "warn", str: "请求超时！" });
      break;
    case 500:
      message({ type: "warn", str: "服务异常！" });
      break;
    case 502:
      message({ type: "warn", str: "网关错误！" });
      break;
    case 503:
      message({ type: "warn", str: "服务不可用！" });
      break;
  }
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    console.log(config);
    // 实列化axios
    this.service = axios.create(config);
    this.service.interceptors.request.use(
      (config: any) => {
        // openLoading();

        const token = localStorage.getItem("token") || "";
        (config.headers as AxiosRequestHeaders).authorization = token;
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        if (data.code && data.code !== 200) {
          message.error(data.msg);
          Promise.reject(data);
        }
        return data.data || data.result;
      },
      async (error: AxiosError) => {
        const { response } = error;
        if (error.message.indexOf("timeout") !== -1)
          message.error("请求超时！");
        if (response) checkStatus(response.status);
        if (!window.navigator.onLine) window.location.hash = "/500";
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    console.log(url);
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  patch<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.patch(url, params, _object);
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new RequestHttp(config);
