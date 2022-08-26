import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import { create, NButton } from "naive-ui"
// 通用字体
import "vfonts/Lato.css"
// 等宽字体
import "vfonts/FiraCode.css"

const naive = create({
    components: [NButton],
})

createApp(App).use(naive).use(router).mount("#app")
