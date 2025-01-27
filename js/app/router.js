import { createRouter, createWebHashHistory } from './libs/vue-router.global.js';
import { login } from './widgets/login.js';

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Login', component: login },
    ]
});
