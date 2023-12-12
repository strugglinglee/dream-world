<template>
    <div class="h5Container">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.h5Container {
    box-sizing: border-box;
    padding: 16px;
    width: 375px;
    height: 80vh;
    background-color: #fff;
    border-radius: 16px;
}
</style>
