<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "../components/HelloWorld.vue"

import { useRouter } from "vue-router"

const router = useRouter()

const goDetail = () => {
    router.push("/detail")
}
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <div class="cell" @click="goDetail">hhhhh2</div>
</template>

<style lang="scss" scoped>
.logo {
    padding: 1.5em;
    height: 6em;
    will-change: filter;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
