import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.component('welcome-component', require('./components/WelcomeComponent.vue').default); // 组件后需要添加 .default 否则会报错
Vue.component('header-component', require('./components/header/HeaderComponent.vue').default);
Vue.component('footer-component', require('./components/footer/FooterComponent.vue').default);
const app = new Vue({
    el: '#app'
});