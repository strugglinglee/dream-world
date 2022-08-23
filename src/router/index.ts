import Home from '../pages/home.vue'
import Detail from '../pages/detail.vue'
import {
    createWebHistory,
    createRouter
} from 'vue-router'

const routes = [{
    path: '/',
    component: Home
},{
    path:'/detail',
    component: Detail
}]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router