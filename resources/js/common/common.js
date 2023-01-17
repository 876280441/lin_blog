import Vue from 'vue'
Vue.component('welcome-component', require('./components/WelcomeComponent.vue').default); // 组件后需要添加 .default 否则会报错
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
const app = new Vue({
    el: '#app'
});