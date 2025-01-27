const { createApp } = Vue;
const { createRouter, createWebHistory } = VueRouter;

const routes = [
    {
        path: '/',
        component: {
            template: '<h1>Главная страница</h1><p>Добро пожаловать на сайт!</p>',
        },
    },
    {
        path: '/about',
        component: {
            template: '<h1>О проекте</h1><p>Этот сайт использует Vue Router.</p>',
        },
    },
];

const router = createRouter({
    history: createWebHistory('/praktikadanilprotsenko.github.io/-/'),
    routes: [
        {
            path: '/',
            component: {
                template: '<h1>Главная страница</h1><p>Добро пожаловать!</p>',
            },
        },
        {
            path: '/about',
            component: {
                template: '<h1>О проекте</h1><p>Этот сайт использует Vue Router.</p>',
            },
        },
    ],
});

const app = createApp({});
app.use(router);
app.mount('#app');
