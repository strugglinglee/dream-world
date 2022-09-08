import type { MenuOption } from "naive-ui"
import { LogoWechat as WechatIcon, GameController } from "@vicons/ionicons5"
import {
    GithubAlt as GithubIcon,
    AngleDoubleDown as JuejinIcon,
    MehRegular as MyIcon,
} from "@vicons/fa"
import { NIcon } from "naive-ui"
import { h, Component } from "vue"
// import { RouterLink } from "vue-router"
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

export const defaultExpandedKeys = ["fish", "braise"]

const getLinkLabel = (text: string, link: string) => {
    return () =>
        h(
            "a",
            {
                href: link,
                target: "_blank",
            },
            { default: () => text }
        )
}

const myOption: MenuOption = {
    label: "关于我",
    key: "about",
    icon: renderIcon(MyIcon),
    children: [
        {
            label: getLinkLabel("github", "https://github.com/strugglinglee"),
            key: "github",
            icon: renderIcon(GithubIcon),
        },
        {
            label: getLinkLabel("掘金: 阿李贝斯", "https://juejin.cn/user/1028798615654669"),
            key: "juejin",
            icon: renderIcon(JuejinIcon),
        },
        {
            label: "微信公众号: 阿李贝斯的白日梦",
            key: "wechat",
            icon: renderIcon(WechatIcon),
        },
    ],
}

const likeOption: MenuOption = {
    label: "我想做什么",
    key: "TODO",
    icon: renderIcon(GameController),
    children: [
        {
            label: "可视化",
            key: "visual",
        },
    ],
}

export const menuOptions: MenuOption[] = [{ ...likeOption }, { ...myOption }]
