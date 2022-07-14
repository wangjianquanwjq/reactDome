export let BASE_URL = '';
export const TIME_OUT = 5000;
// 根据import.meta.env.MODE区分
// 开发环境 development
// 生产环境 production
// 测试环境 text
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/tenant';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api';
} else {
  BASE_URL = '/api';
}
