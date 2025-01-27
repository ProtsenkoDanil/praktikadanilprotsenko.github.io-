import { createRouter, createWebHashHistory } from 'vue-router';
import { login } from './pages/login.js';

const routes = [
    { path: '/', component: login, name: 'Login' },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});
