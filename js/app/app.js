const { createApp } = Vue;
const { createRouter, createWebHistory } = VueRouter;

// Настройка маршрутов
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

// Настройка роутера с учётом базового пути
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

// Создание Vue-приложения
const app = createApp({});
app.use(router);
app.mount('#app');
