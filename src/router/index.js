import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Glossario from "../views/Glossario/Glossario.vue";
import Universidade from "../views/Universidade/Universidade.vue";
import Universidades from "../views/Universidades/Universidades.vue";
import ViewDataSheet from "../views/ViewDataSheet.vue";
import Creditos from "../views/Creditos/Creditos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/universidade/:university',
    name: 'university',
    component: Universidade
  },
  {
    path: '/universidade/:university/:year/:sheet',
    name: 'viewDataSheet',
    component: ViewDataSheet
  },
  {
    path: '/glossario',
    name: 'Glossário',
    component: Glossario
  },
  {
    path: '/universidades',
    name: 'Universidades',
    component: Universidades
  },
  {
    path: '/creditos',
    name: 'Créditos',
    component: Creditos
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' };
  }
})

export default router
