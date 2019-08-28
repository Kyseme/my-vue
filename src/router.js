// import Parent from './pages/Parent.vue';
// import Test from './pages/Test.vue';
// import VueRouter from 'vue-router';

const pages = {
    Parent: () => import('./pages/Parent.vue'),
    Test: () => import('./pages/Test.vue'),
    App: () => import('./App.vue')
};
export const routes = [
    {
        path:'/parent',
        name:'parent',
        component: pages.Parent,
    },
    // {
    //     path: '/',
    //     name: 'app',
    //     component: pages.App

    // },
    {
        path:'/test',
        name:'test',
        component: pages.Test
    }
];