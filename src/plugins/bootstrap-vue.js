//Configurações do plugin Bootstrap-Vue
import Vue from 'vue'
//Importar o BootstrapVue e apenas os componentes específicos desejados
import {BootstrapVue, BIconChevronDoubleUp, BCollapse, BNavbar, BNavbarToggle, BContainer, BNavbarNav} from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.component('BIconChevronDoubleUp', BIconChevronDoubleUp);
Vue.component('BCollapse', BCollapse);
Vue.component('BNavbar', BNavbar);
Vue.component('BNavbarNav', BNavbarNav);
Vue.component('BNavbarToggle', BNavbarToggle);
Vue.component('BContainer', BContainer);

