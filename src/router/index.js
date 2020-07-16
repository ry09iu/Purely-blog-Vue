import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import blogRouter from './modules/blog';
import adminRouter from './modules/admin';

Vue.use(VueRouter);

const routes = [

    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/views/system/login/index.vue')
    },

    ...blogRouter,
    ...adminRouter
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
