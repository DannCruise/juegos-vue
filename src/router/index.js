import { createRouter, createWebHistory } from 'vue-router'
import Index from '../Views/Index.vue'
import Simon from '../Views/Simon.vue'
import Adivina from '../Views/Adivina.vue'

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/simon',
      name: 'simon',
      component: Simon
    },
    {
      path: '/adivina',
      name: 'adivina',
      component: Adivina
    },
  ]
})

export default router