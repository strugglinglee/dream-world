<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from "naive-ui"
import { lightTheme } from "naive-ui"
</script>

<template>
    <n-config-provider :theme="lightTheme">
        <n-message-provider>
            <router-view></router-view>
        </n-message-provider>
    </n-config-provider>
</template>

<style lang="scss" scoped></style>
