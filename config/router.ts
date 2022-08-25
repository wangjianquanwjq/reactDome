const routerConfig = {
  path: '/',
  component: '@/layouts/index',
  exact: false,
  routes: [
    {
      path: '/assembly',
      label: '组件的封装',
      redircect: '/assembly/table',
      key: 'assembly',
      routes: [
        {
          path: '/assembly/table',
          component: '@/pages/assembly/table',
          label: '表格',
          key: 'table',
          name: 'table',
        },
        {
          path: '/assembly/tree',
          component: '@/pages/assembly/tree',
          label: 'tree',
          key: 'tree',
          name: 'addEdit',
        },
        {
          path: '/assembly/addEdit',
          component: '@/pages/assembly/tree/addEdit',
          label: 'addEdit',
          key: 'addEdit',
          name: 'addEdit',
        },
      ],
    },
  ],
};
export default routerConfig;
