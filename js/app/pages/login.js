export const login = {
    computed: {
        backgroundImageStyle() {
            return {
                backgroundImage: `url(${this.getBackgroundImageUrl()})`
            };
        }
    },
    methods: {
        getBackgroundImageUrl() {
            return "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/168879530_747589779451604_3821274295724786984_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=GoEwP6UUVOgQ7kNvgF0fEZk&_nc_gid=d6aece6cadf842229f778c59f73cd0fb&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MjU0NTkxNjYyODI0MjQ0OTI0MA%3D%3D.3-ccb7-5&oh=00_AYD_FMSPoSBP0f4iIjIpO1W-gY6Q08cfil51d_7G67vmxw&oe=67A2962E&_nc_sid=7a9f4b";
        },
    },


    data: function () {
        return {
            img: 1,
            parent: ''
        }
    },
    mounted: function () {
        this.img = this.randomIntFromInterval(1, 7);
        this.parent = this.$parent.$parent;
    },
    methods: {
        randomIntFromInterval: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        login: function () {
            var self = this;
            var data = self.parent.toFormData(self.parent.formData);

            axios.post(this.parent.url + "/site/login", data).then(function (response) {
                if (response.data.error) {
                    self.$refs.msg.alertFun(response.data.error);
                }
                if (response.data.user) {
                    self.parent.user = response.data.user;
                    self.parent.page('/campaigns');
                    window.localStorage.setItem('user', JSON.stringify(self.parent.user));
                }
            }).catch(function (error) {
                console.log('errors: ', error);
            });
        },
    },
    template: `
    <div class="flex">
        <msg ref="msg"/>
        <!--<div id="left-area" class="w40 header">HEADER?-->
        <div id="left-area" class="w40">
            <div class="header">
                <div class="wrapper flex">
                    <div class="w40 logo">
                        <img :src="parent.url+'/app/views/images/logo.svg'"/>
                    </div>
                    <div class="w60 al">
                        <h1>Affiliate Sign in</h1>
                    </div>
                </div>
            </div>

            <div class="form inner-form p20">
                <form @submit.prevent="login()" v-if="parent.formData">
                    <div class="row">
                        <label>Email</label>
                        <input type="email" v-model="parent.formData.email" required>
                    </div>

                    <div class="row">
                        <label>Password</label>
                        <input type="password" v-model="parent.formData.password" required autocomplete="on">
                    </div>

                    <div class="row">
                        <button class="btn">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
        <div id="right-area" class="w60">
            <img :src="parent.url+'/app/views/images/Cover_'+img+'.jpg'" />
        </div>
    </div>
`};
