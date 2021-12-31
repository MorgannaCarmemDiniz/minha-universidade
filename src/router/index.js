//Arquivo de definição das rotas
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Glossario from "../views/Glossario/Glossario.vue";
import Universidade from "../views/Universidade/Universidade.vue";
import Universidades from "../views/Universidades/Universidades.vue";
import ViewDataSheet from "../views/ViewDataSheet.vue";
import Creditos from "../views/Creditos/Creditos.vue";
import universities from "../../spreadsheetParser/data/Universities.js";

Vue.use(VueRouter);

//Lista de rotas criadas manualmente
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
];

//Loop que cria as rotas relativas as páginas exclusivas de cada universidade automaticamente com base na propriedade
//customRoutes de cada universidade
for (let university of universities) {
  for (let customRoute of university.customRoutes) {
    routes.push({
      path: `/universidade/${university.code}/${customRoute.path}`,
      name: customRoute.name,
      component: customRoute.component,
    })
  }
}

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' };
  }
})

export default router
