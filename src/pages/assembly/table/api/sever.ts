import axios, { VPS } from '@/axios/http';
export function apiTest1(params?: object, config?: object) {
  return axios.get(VPS.IOT, '/contractTemplate/page', params, { ...config });
}

export function apiTest2(params?: object, config?: object) {
  return axios.get(VPS.TENANT, '/bed/findDetails/page', params, { ...config });
}
export function apiTest5(params?: object, config?: object) {
  return axios.get(VPS.TENANT, '/bed/findDetails/page', params, { ...config });
}
export const listApi = (params: any) =>
  axios.get(VPS.TENANT, '/bed/findDetails/page', params);
// export function apiTest3(params?: object, config?: object) {
//   return axios.post(VPS.TENANT, '/api/data', params, { ...config });
// }

// export function apiTest4(params?: object, config?: object, err?: string) {
//     return axios.post('/api/data22', params, { ...config }, err)
// }
