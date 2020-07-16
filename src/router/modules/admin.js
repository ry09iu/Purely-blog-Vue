/**
 * 博客后台管理页面路由
 */
import HeaderAside from '@/views/admin/HeaderAside';

const adminRouter = [
    {
        path: '/admin',
        component: HeaderAside,
        redirect: '/admin/index',
        children: [{
            path: 'index',
            name: 'adminIndex',
            component: () => import('@/views/admin/index/index'),
            meta: { title: '首页', icon: 'el-icon-s-home' }
        }]
    },
    {
        path: '/admin/article',
        component: HeaderAside,
        redirect: '/admin/article/list',
        meta: {
            title: '博文管理',
            icon: 'el-icon-s-management'
        },
        children: [{
            path: 'add',
            component: () => import('@/views/admin/article/add'),
            name: 'Add',
        },
        {
            path: 'edit/:id(\\d+)',
            component: () => import('@/views/admin/article/edit'),
            name: 'Edit',
        },
        {
            path: 'list',
            component: () => import('@/views/admin/article/list'),
            name: 'List',
        }]
    },
    {
        path: '/admin/blog',
        component: HeaderAside,
        meta: {
            title: '博客管理',
            icon: 'el-icon-menu'
        },
        children: [{
            path: 'tags',
            component: () => import('@/views/admin/tags/index'),
            name: 'Tags',
        },
        {
            path: 'category',
            component: () => import('@/views/admin/category/index'),
            name: 'Category',
        }]
    }
];

export default adminRouter;