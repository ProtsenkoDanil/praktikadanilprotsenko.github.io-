// Используем глобальные объекты Vue и VueRouter
const { createApp } = Vue;

// Компонент для главной страницы
const Home = {
    template: `<h1>Добро пожаловать!</h1><p>Это главная страница Vue-приложения.</p>`,
};

// Создаём Vue-приложение
const app = createApp({
    data() {
        return {
            message: "Привет, Vue работает!",
        };
    },
    template: `
        <div>
            <h1>{{ message }}</h1>
            <p>Теперь Vue успешно инициализирован.</p>
        </div>
    `,
});

// Монтируем приложение в #app
app.mount('#app');
