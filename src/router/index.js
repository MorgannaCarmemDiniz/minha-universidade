import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QDD2020 from "../views/QDD2020";
import Glossario from "../views/Glossario";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/qdd2020',
    name: 'QDD UNIRIO 2020',
    component: QDD2020
  },
  {
    path: '/glossario',
    name: 'Glossário',
    component: Glossario
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
