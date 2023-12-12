<template>
    <n-layout class="playground" has-sider>
        <n-layout-sider
            bordered
            class="sider"
            show-trigger
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :native-scrollbar="false"
            :inverted="inverted"
        >
            <n-menu
                ref="menuInstRef"
                v-model:value="selectedKey"
                class="menu"
                :inverted="inverted"
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="menuOptions"
                @update:value="handleMenuSelect"
            />
        </n-layout-sider>
        <n-layout class="main">
            <router-view></router-view>
        </n-layout>
    </n-layout>
</template>

<script setup lang="ts">
import { h, ref, Component, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import { NIcon, NLayout, NLayoutSider, NMenu } from "naive-ui"
import {
    BookOutline as BookIcon,
    // PersonOutline as PersonIcon,
    // WineOutline as WineIcon,
} from "@vicons/ionicons5"
const router = useRouter()
const route = useRoute()

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
    {
        label: "CSS玩具",
        key: "css",
        icon: renderIcon(BookIcon),
        children: [
            {
                label: "滚动抽奖",
                key: "lottery",
            },
        ],
    },
    // {
    //     label: "暂无定性",
    //     key: "pinball-1973",
    //     icon: renderIcon(WineIcon),
    //     children: [
    //         {
    //             label: "工时计算",
    //             key: "attendance",
    //         },
    //     ],
    // },
    // {
    //     label: "寻羊冒险记",
    //     key: "a-wild-sheep-chase",
    //     disabled: true,
    //     icon: renderIcon(BookIcon),
    // },
    // {
    //     label: "舞，舞，舞",
    //     key: "dance-dance-dance",
    //     icon: renderIcon(BookIcon),
    //     children: [
    //         {
    //             type: "group",
    //             label: "人物",
    //             key: "people",
    //             children: [
    //                 {
    //                     label: "叙事者",
    //                     key: "narrator",
    //                     icon: renderIcon(PersonIcon),
    //                 },
    //                 {
    //                     label: "羊男",
    //                     key: "sheep-man",
    //                     icon: renderIcon(PersonIcon),
    //                 },
    //             ],
    //         },
    //         {
    //             label: "饮品",
    //             key: "beverage",
    //             icon: renderIcon(WineIcon),
    //             children: [
    //                 {
    //                     label: "威士忌",
    //                     key: "whisky",
    //                 },
    //             ],
    //         },
    //         {
    //             label: "食物",
    //             key: "food",
    //             children: [
    //                 {
    //                     label: "三明治",
    //                     key: "sandwich",
    //                 },
    //             ],
    //         },
    //         {
    //             label: "过去增多，未来减少",
    //             key: "the-past-increases-the-future-recedes",
    //         },
    //     ],
    // },
]
const inverted = ref(false)

const handleMenuSelect = (type: string) => {
    const curPath = `/playground/${type}`
    if (route.path === curPath) return
    router.push(curPath)
}

const menuInstRef = ref<any>(null)
const selectedKey = ref<string>("")
onMounted(() => {
    selectActiveMenu()
})
const selectActiveMenu = () => {
    const arrs = route.path.split("/").filter(i => i && i !== "playground")
    const curType = arrs.length ? arrs[arrs.length - 1] : menuOptions[0].children[0].key
    selectedKey.value = curType
    handleMenuSelect(curType)
    menuInstRef.value?.showOption(curType)
}
</script>

<style lang="scss" scoped>
.playground {
    background-color: transparent;
    height: calc(100vh - 60px);
}
.sider {
    background-color: transparent;
}
.menu {
    background-color: transparent;
}
.main {
    background-color: transparent;
    padding: 32px;
}
</style>
