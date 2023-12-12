<template>
    <div class="lottery">
        <H5Container>
            <div class="lottery-main">
                <div v-for="(item, index) in prizePools" :key="index" class="coupon">
                    {{ item.cost }}
                </div>
            </div>
            <button class="lottery-btn">点击抽奖</button>
        </H5Container>
    </div>
</template>

<script lang="ts" setup>
import H5Container from "../components/h5Container.vue"
const prizePools = [
    {
        cost: "5折",
    },
    {
        cost: "2折",
    },
    {
        cost: "1折",
    },
    {
        cost: "免费",
    },
    {
        cost: "骨折",
    },
]
</script>

<style lang="scss" scoped>
.lottery {
    display: flex;
    align-items: center;
    justify-content: center;

    &-main {
        border-radius: 16px;
        padding: 8px;
        border: 1px solid coral;
        overflow-x: auto;
        white-space: nowrap;

        &::-webkit-scrollbar {
            display: none;
        }

        .coupon {
            width: 100px;
            height: 100px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: coral;
            color: #fff;
            font-size: 30px;
            border-radius: 16px;
            margin: 4px;
        }
    }

    &-btn {
        width: 100%;
        height: 40px;
        margin-top: 16px;
        font-size: 20px;
        color: coral;
        border-radius: 16px;
        border: 1px solid coral;
        appearance: none; /* 禁用默认样式 */
        background-color: transparent; /* 设置透明背景 */
        cursor: pointer;
        transition: all 500ms;

        &:active {
            transition: all 500ms;
            transform: scale(0.9);
        }
    }
}
</style>
