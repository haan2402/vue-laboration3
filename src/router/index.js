import { createRouter, createWebHistory } from 'vue-router'
import startView from '@/views/startView.vue'
import bookView from '@/views/bookView.vue'
import infoView from '@/views/infoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "start",
    component: startView
  },
  {
    path: "/bocker",
    name: "böcker",
    component: bookView
  },
  {
    path: "/info",
    name: "info",
    component: infoView
  }
],
})

export default router
