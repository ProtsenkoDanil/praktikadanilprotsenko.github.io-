const { createApp } = Vue;
const { createRouter, createWebHistory } = VueRouter;

// Маршруты
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
            template: '<h1>О проекте</h1><p>Этот сайт создан на Vue.</p>',
        },
    },
];

// Создание роутера
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Создание Vue-приложения
const app = createApp({});
app.use(router);
app.mount('#content');
