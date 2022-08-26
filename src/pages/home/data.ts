import type { MenuOption } from "naive-ui"
import { LogoWechat as WechatIcon } from "@vicons/ionicons5"
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

export const menuOptions: MenuOption[] = [{ ...myOption }]
