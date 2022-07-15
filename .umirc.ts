import { defineConfig } from 'umi';
import routerConfig from './config/router';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none', //设置 node_modules 目录下依赖文件的编译方式
  },
  routes: [
    {
      path: '/',
      component: '@/pages/login',
      redirect: '/login',
    },
    {
      path: '/login',
      component: '@/pages/login',
    },
    routerConfig,
  ],
  fastRefresh: {}, //快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈
  ignoreMomentLocale: true, //忽略 moment 的 locale 文件，用于减少尺寸
  hash: true, //配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  targets: {
    //配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换
    ie: 9,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  proxy: {
    '/iot': {
      target: 'http://test-member.hopekoruit.com', // 服务端域名
      changeOrigin: true, // 允许域名进行转换
      pathRewrite: { '^/iot': '' },
    },
    '/tenant': {
      target: 'http://172.18.14.253:8013', // 服务端域名
      changeOrigin: true, // 允许域名进行转换
      pathRewrite: { '^/tenant': '' },
    },
  },
});
