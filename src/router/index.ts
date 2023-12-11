import Home from "../pages/home/index.vue"
import Detail from "../pages/detail.vue"
import Attendance from "../pages/attendance.vue"
import playgroundRoute from "../pages/playground/router"
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
    {
        path: "/attendance",
        component: Attendance,
    },
    { ...playgroundRoute },
]

const router = createRouter({
    history: createWebHistory("/dream-world/"),
    routes,
})

export default router
