import axios, { AxiosResponse } from "axios";

const headers: any = {
  Accept: "application/json",
  "Content-Type": "application/json",
  timeout: 15000,
};

const getToken = () =>
  sessionStorage.getItem("adjutor-token")
    ? sessionStorage.getItem("adjutor-token")
    : "";

const instance = axios.create({
  headers,
});

instance.interceptors.request.use(function (config: any) {
  const token = `bearer ${getToken()}`;
  config.headers.Authorization = token;

  return config;
});

// instance.interceptors.request.use(function (config: any) {
//   const auth = JSON?.parse(sessionStorage.getItem("persist:auth") || "{}");
//   const token = `bearer ${
//     Object.keys(auth).length > 0 ? JSON.parse(auth.access_token) : ""
//   }`;
//   config.headers.Authorization = token;
//   return config;
// });

export interface IAxiosResponse extends AxiosResponse {
  message?: string;
}

const ResponseBody: any = (response: IAxiosResponse) => response.data;

export const callApi = {
  get: (url: string, body?: {}) => instance.get(url, body).then(ResponseBody),
  post: (url: string, body?: {}, config?: {}) =>
    instance.post(url, body, config).then(ResponseBody),
  put: (url: string, body?: {}, config?: {}) =>
    instance.put(url, body, config).then(ResponseBody),
  patch: (url: string, body?: {}, config?: {}) =>
    instance.patch(url, body, config).then(ResponseBody),
  delete: (url: string, body?: {}) =>
    instance.delete(url, body).then(ResponseBody),
};
