import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Glossario from "../views/Glossario/Glossario";
import Universidade from "../views/Universidade";
import Universidades from "../views/Universidades";
import ViewDataSheet from "../views/ViewDataSheet";

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
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
