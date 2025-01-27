export const login = {
    data: function() {
        return {
            img: 1,
            hs: 0,
            parent: ''
        };
    },
    mounted: function() {
        console.log('ПРАКТИКА');
        this.img = this.randomIntFromInterval(1, 7);
        this.parent = this.$parent?.$parent || null;
    },
    methods: {
        randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    },
    template: `
        <div class="flex">
            <p>gdfgdfgdfgdf</p>
        </div>
    `
};
