export const login = {
    data: function() {
        return {
            img: 1,
            parent: null
        };
    },
    mounted: function() {
        this.parent = this.$parent?.$parent;
    },
    methods: {
        exampleMethod() {
            console.log("Example method works!");
        }
    },
    template: `
        <div>
            <h1>Login Page</h1>
            <p>Welcome to the login page</p>
        </div>
    `
};
