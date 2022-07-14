import axios, { VPS } from '@/axios/http';
export function apiTest1(params?: object, config?: object) {
  console.log(VPS);

  return axios.post(VPS.IOT, '/aaa/data', params, { ...config });
}

export function apiTest2(params?: object, config?: object) {
  return axios.get('/tenant-api/bed/findDetails/page', params, { ...config });
}

export function apiTest3(params?: object, config?: object) {
  return axios.post(VPS.FILESERVER, '/api/data', params, { ...config });
}

// export function apiTest4(params?: object, config?: object, err?: string) {
//     return axios.post('/api/data22', params, { ...config }, err)
// }
