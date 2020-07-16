// asideMenuConfig：侧边导航配置

const asideMenu = [
    {
        name: '首页',
        path: '/admin',
        icon: 'el-icon-s-home',
    },
    {
        path: '/admin/article',
        name: '博文管理',
        icon: 'el-icon-s-management',
        children: [
            {
                path: '/add',
                name: '发布博文',
            },
            {
                path: '/list',
                name: '博文列表',
            },
        ],
    },
    {
        path: '/admin/blog',
        name: '博客管理',
        icon: 'el-icon-menu',
        children: [
            {
                path: '/tags',
                name: '标签管理',
            },
            {
                path: '/category',
                name: '分类管理',
            },
        ],
    }
];

export { asideMenu };
