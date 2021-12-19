import { library } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faExternalLinkAlt, faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from "vue";

library.add(faExternalLinkAlt);
library.add(faEnvelope);
library.add(faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);