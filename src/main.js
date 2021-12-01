import Vue from 'vue';
import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';
import './plugins/fontawesome';
import App from './App.vue';
import router from './router';
import VueAnimateOnScroll from 'vue-animate-onscroll'
import './css/main.scss';

Vue.config.productionTip = false;

Vue.use(VueAnimateOnScroll);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
