import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionesView from '../views/OpinionesView.vue'
import AdministracionView from '../views/AdministracionView.vue'
import EdicionView from '../views/EdicionView.vue'
import NotFound from '../components/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    
    component: OpinionesView
  },
  {
    path: '/administracion',
    name: 'administracion',
    
    component: AdministracionView
  },
  {
    path: '/editar/:id',
    name: 'editar',
    
    component: EdicionView
  },
  {
    path: '*',
    name: 'notfound',
    
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
