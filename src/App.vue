<script setup lang="ts">
import { NConfigProvider } from "naive-ui"
import { lightTheme } from "naive-ui"
</script>

<template>
    <n-config-provider :theme="lightTheme">
        <router-view></router-view>
    </n-config-provider>
</template>

<style lang="scss" scoped></style>
