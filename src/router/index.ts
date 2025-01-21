import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404View.vue'

const routes = [
    { path: '/:pathMatch(.*)*', name: '¯\\_(ツ)_/¯', component: NotFound },
    { path: '/', name: 'Home', component: HomeView }
    // {
    //     path: '/about',
    //     name: 'about'
    //     // route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     // component: () => import('../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
