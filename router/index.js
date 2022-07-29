import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import IniciView from '../views/IniciView.vue'
import GestionarPerfilUsuariView from '../views/GestionarPerfilUsuariView.vue'
import UsuarisView from '../views/UsuarisView.vue'
import EsdevenimentsView1 from '../views/EsdevenimentsView1.vue'
import EsdevenimentsView2 from '../views/EsdevenimentsView2.vue'
import InfoUsuariView from '../views/InfoUsuariView.vue'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/inici',
    name:'Inici',
    component: IniciView
  },
  {
    path: '/gPerfil',
    name:'gPerfil',
    component: GestionarPerfilUsuariView
  },
  {
    path: '/usuaris',
    name: 'Usuaris',
    component: UsuarisView

  },
  {
    path: '/InfoUsuari/:id',
    name: 'InfoUsuari',
    component: InfoUsuariView

  },
  {
    path: '/esdeveniments',
    name: 'Esdeveniments1',
    component: EsdevenimentsView1

  },
  {
    path: '/esdeveniments2/:id',
    name: 'Esdeveniments2',
    component: EsdevenimentsView2

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
