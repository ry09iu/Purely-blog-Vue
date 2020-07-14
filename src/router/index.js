import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '@/views/blog/Layout';
import BlogRouter from './modules/blog';

Vue.use(VueRouter);

const routes = [

    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/views/system/login/index.vue')
    },

    ...BlogRouter
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
