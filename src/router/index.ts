import Home from "../pages/home/index.vue"
import Detail from "../pages/detail.vue"
import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail",
        component: Detail,
    },
]

const router = createRouter({
    history: createWebHistory("/dream-world/"),
    routes,
})

export default router
