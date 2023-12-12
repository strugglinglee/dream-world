<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NLayout, NLayoutHeader } from "naive-ui"
import { lightTheme } from "naive-ui"
import { useRouter } from "vue-router"

const router = useRouter()
const goHome = () => {
    router.push("/")
}
</script>

<template>
    <n-config-provider :theme="lightTheme">
        <n-message-provider>
            <n-layout class="page">
                <n-layout-header class="header" bordered>
                    <span class="header-title" @click="goHome">阿李贝斯’s dream world</span>
                </n-layout-header>
                <router-view></router-view>
            </n-layout>
        </n-message-provider>
    </n-config-provider>
</template>

<style lang="scss" scoped>
.page {
    width: 100vw;
    height: 100vh;
    background-blend-mode: screen;
    background: linear-gradient(limegreen, transparent),
        linear-gradient(90deg, skyblue, transparent), linear-gradient(-90deg, coral, transparent);
}
.header {
    background-color: transparent;
    font-size: 18px;
    font-weight: 500;
    height: 60px;
    padding-left: 16px;
    display: flex;
    align-items: center;

    &-title {
        cursor: pointer;
    }
}
</style>
