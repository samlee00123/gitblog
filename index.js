const app = Vue.createApp({
    data() {
        return {
            input: "# hello"
        }
    },
    created() {
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input);
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.input = e.target.value;
        }, 300),
        writeBlog: function () {
            console.log(this.input)
        }
    }
}).mount('#app')
