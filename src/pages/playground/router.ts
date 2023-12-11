import Playground from "./index.vue"
import { RouteRecordRaw } from "vue-router"

const playgroundRoute: RouteRecordRaw = {
    path: "/playground",
    component: Playground,
}

export default playgroundRoute
