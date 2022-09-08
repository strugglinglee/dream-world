import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    base: "/dream-world/",
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                    '@import "./src/assets/style/var.scss";@import "./src/assets/style/common.scss";',
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
})
