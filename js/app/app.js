import { router } from './router.js';
import { header } from './widgets/header.js';
import { search } from './widgets/search.js';
import { popup } from './widgets/popup.js';
import { msg } from './widgets/msg.js';
import { toogle } from './widgets/toogle.js';
import { img } from './widgets/img.js';

document.addEventListener('DOMContentLoaded', function () {
    const main = {
        data() {
            return {
                url: "http://affiliate.yanbasok.com",
                user: { name: "", phone: "", email: "", date: "", auth: "" },
                formData: {},
                title: "",
                date: "",
                time: ""
            };
        },
        watch: {
            $route: 'init'
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                const savedUser = localStorage.getItem('user');
                if (savedUser) {
                    try {
                        this.user = JSON.parse(savedUser);
                    } catch (e) {
                        console.error('Ошибка парсинга пользователя из localStorage:', e);
                        localStorage.removeItem('user');
                    }
                }

                router.isReady().then(() => {
                    const path = this.$route.path;
                    const userType = this.user.type;

                    const adminRoutes = ['/campaigns', '/statistics', '/payments', '/sites'];
                    const userRoutes = ['/campaigns', '/users', '/user', '/statistics'];

                    if (!this.user.auth) {
                        this.navigateTo('/');
                    } else if (path === '/' && userType === 'admin') {
                        this.navigateTo('/campaigns');
                    } else if (adminRoutes.includes(path) && userType !== 'admin') {
                        this.navigateTo('/statistics');
                    } else if (userRoutes.includes(path)) {
                        this.navigateTo(path);
                    } else {
                        this.navigateTo('/');
                    }
                });
            },
            logout() {
                this.user = { name: "", phone: "", email: "", date: "", auth: "" };
                this.navigateTo('/');
                localStorage.removeItem('user');
            },
            scrollToTop() {
                setTimeout(() => {
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, 50);
            },
            scrollToBottom() {
                setTimeout(() => {
                    window.scroll({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                }, 50);
            },
            navigateTo(path = "") {
                this.$router.replace(path);
                this.title = this.$route.name;
                document.title = this.$route.name || "My Application";
            },
            toFormData(obj) {
                const fd = new FormData();
                for (const key in obj) {
                    if (typeof obj[key] === 'object' && key !== 'img' && key !== 'copy') {
                        for (const nestedKey in obj[key]) {
                            if (typeof obj[key][nestedKey] === 'object') {
                                for (const deepKey in obj[key][nestedKey]) {
                                    fd.append(
                                        `${key}[${nestedKey}][${deepKey}]`,
                                        obj[key][nestedKey][deepKey]
                                    );
                                }
                            } else {
                                fd.append(`${key}[${nestedKey}]`, obj[key][nestedKey]);
                            }
                        }
                    } else if (key !== 'copy') {
                        fd.append(key, obj[key]);
                    }
                }
                return fd;
            }
        }
    };

    Vue.createApp(main)
        .use(router)
        .mount('#content');
});
