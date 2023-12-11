<script setup lang="ts">
// import Test from "@/components/test.vue"
import { NMenu, NAvatar } from "naive-ui"
import Avatar from "@/assets/images/avatar.png"
import { menuOptions, defaultExpandedKeys } from "./data"
import { useRouter } from "vue-router"
const router = useRouter()
const goPlay = () => {
    router.push({ path: "/playground" })
}
</script>

<template>
    <div class="home">
        <!-- <Test></Test> -->
        <n-avatar round :size="88" :src="Avatar" />
        <n-menu :options="menuOptions" :default-expanded-keys="defaultExpandedKeys" accordion />

        <n-button type="primary" size="large" strong @click="goPlay"> PLAY 一下！ </n-button>
    </div>
</template>

<style lang="scss" scoped>
.home {
    width: 500px;
    margin: auto;
    margin-top: 200px;
    text-align: center;
}
.n-menu {
    text-align: left !important;
}
</style>
