import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Маршруты для роутера
const routes = [
    {
        path: '/',
        component: {
            template: '<h1>Главная страница</h1><p>Сайт работает через Vue Router!</p>',
        },
    },
    {
        path: '/about',
        component: {
            template: '<h1>О проекте</h1><p>Это простая страница для теста.</p>',
        },
    },
];

// Создание роутера
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Инициализация Vue-приложения
const app = createApp({});
app.use(router);
app.mount('#content');
