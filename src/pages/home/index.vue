<script setup lang="ts">
// import Test from "@/components/test.vue"
import { NMenu, NAvatar } from "naive-ui"
import Avatar from "@/assets/images/avatar.png"
import { menuOptions, defaultExpandedKeys } from "./data"
</script>

<template>
    <div class="home">
        <!-- <Test></Test> -->
        <n-avatar round :size="88" :src="Avatar" />
        <n-menu :options="menuOptions" :default-expanded-keys="defaultExpandedKeys" accordion />
    </div>
</template>

<style lang="scss" scoped>
.home {
    text-align: center;
}
.n-menu {
    text-align: left !important;
}
</style>
