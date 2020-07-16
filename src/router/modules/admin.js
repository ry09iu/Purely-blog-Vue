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
            name: 'adminArticleAdd',
            meta: { title: '发布博文', icon: '' }
        },
        {
            path: 'edit/:id(\\d+)',
            component: () => import('@/views/admin/article/edit'),
            name: 'adminArticleEdit',
            meta: { title: '博文编辑', noCache: true },
            hidden: true
        },
        {
            path: 'list',
            component: () => import('@/views/admin/article/list'),
            name: 'adminArticleList',
            meta: { title: '博文列表', icon: '' }
        }]
    }
];

export default adminRouter;