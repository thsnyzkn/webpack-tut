import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import greeter, { average } from './utils'
import './styles/main.scss'

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app",)
console.log(average(1, 4));
console.log(greeter('Boyner'))