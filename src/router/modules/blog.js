/**
 * 博客相关页面路由
 */

import Layout from '@/views/blog/Layout';
import Home from '@/views/blog/home';
import Archives from '@/views/blog/archives';
import Detail from '@/views/blog/detail';
import Tags from '@/views/blog/tags';
import About from '@/views/blog/about';

const BlogRouter = [
    {
        path: '/',
        name: '',
        hidden: true,
        component: Layout,
        children: [{
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/archives',
            name: 'Archives',
            component: Archives
        }, {
            path: '/detail/:id(\\d+)',
            name: 'Detail',
            component: Detail
        }, {
            path: '/tags',
            name: 'Tags',
            component: Tags
        }, {
            path: '/about',
            name: 'About',
            component: About
        }]
    },
];

export default BlogRouter;
