<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { useRouter } from "vue-router"

const router = useRouter()

const goDetail = () => {
    router.push("/detail")
}
</script>

<template>111</template>

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
