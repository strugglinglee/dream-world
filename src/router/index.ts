import Home from "../pages/home/index.vue"
import Detail from "../pages/detail.vue"
import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/dream-world",
        component: Home,
    },
    {
        path: "/dream-world/detail",
        component: Detail,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
