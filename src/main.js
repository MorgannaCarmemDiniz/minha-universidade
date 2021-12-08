import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faExternalLinkAlt, faBars, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAnimateOnScroll from 'vue-animate-onscroll'

import './css/main.scss';

Vue.config.productionTip = false;

library.add(faExternalLinkAlt);
library.add(faBars);
library.add(faEnvelope);
library.add(faHandHoldingUsd);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueAnimateOnScroll);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
