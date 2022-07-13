const routerConfig =
{
    path: '/',
    component: '@/layouts/index',
    exact: false,
    routes: [
        {
            path: '/assembly',
            label: "组件的封装",
            redircect: "/assembly/table",
            key: "assembly",
            routes: [
                {
                    path: '/assembly/table',
                    component: '@/pages/assembly/table',
                    label: "表格",
                    key: "table",
                },
                {
                    path: '/assembly/tree',
                    component: '@/pages/assembly/tree',
                    label: "tree",
                    key: "tree",
                },
            ]
        },

    ],
}
export default routerConfig; 