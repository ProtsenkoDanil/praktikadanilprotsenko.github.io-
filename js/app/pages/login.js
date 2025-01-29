export const login = {
    data() {
        return {
            img: 1,
            parent: null,
            formData: {
                email: "",
                password: ""
            }
        };
    },
    mounted() {
        this.img = this.randomIntFromInterval(1, 7);
        this.parent = this.$parent?.$parent;
    },
    methods: {
        randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        login() {
            let self = this;
            let data = self.parent.toFormData(self.formData);

            axios.post(self.parent.url + "/site/login", data)
                .then(response => {
                    if (response.data.error) {
                        self.$refs.msg.alertFun(response.data.error);
                        return;
                    }
                    if (response.data.user) {
                        self.parent.user = response.data.user;
                        self.parent.page('/campaigns');
                        window.localStorage.setItem('user', JSON.stringify(self.parent.user));
                    }
                })
                .catch(error => {
                    console.log('Login error:', error);
                    self.$refs.msg.alertFun("Login failed. Please try again.");
                });
        }
    },
    template: `
        <div class="login-container">
            <msg ref="msg"/>
            <div class="login-box">
                <h1>Affiliate Sign in</h1>
                <form @submit.prevent="login">
                    <label>Email</label>
                    <input type="email" v-model="formData.email" required>

                    <label>Password</label>
                    <input type="password" v-model="formData.password" required autocomplete="on">

                    <button class="btn">SIGN IN</button>
                </form>
            </div>
            <div class="login-image">
                <img :src="parent.url+'/app/views/images/Cover_'+img+'.jpg'" />
            </div>
        </div>
    `
};
