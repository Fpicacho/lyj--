import axios from "axios";
import qs from "qs";

let fetch = axios.create({
  // baseURL: "",
  timeout: 10000
});
// 请求拦截器 检测本地是否存在token配合验证token接口已判断token是否有效
// fetch.interceptors.request.use(
//   config => {
//     const admin_token = localStorage.getItem("admin_token");
//     if (admin_token) {
//       config.headers.common.Authorization = `Bearer ${admin_token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
export default {
  get(url, params = {}) {
    return fetch({
      method: "get",
      url,
      params
    });
  },
  post(url, params = {}) {
    return fetch({
      method: "post",
      url,
      data: qs.stringify(params)
    });
  },
  put(url, params = {}) {
    return fetch({
      method: "put",
      url,
      data: qs.stringify(params)
    });
  },
  delete(url, params = {}) {
    return fetch({
      method: "delete",
      url,
      params
    });
  }
};
