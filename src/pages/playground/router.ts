import Playground from "./index.vue"
import Attendance from "./attendance.vue"
import { RouteRecordRaw } from "vue-router"

const playgroundRoute: RouteRecordRaw = {
    path: "/playground",
    component: Playground,
    children: [
        {
            path: "attendance",
            component: Attendance,
        },
    ],
}

export default playgroundRoute
