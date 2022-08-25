# 一个未知世界

## 技术

Vue 3 + TypeScript + Vite + Sass + Vue Router 4

## Task

- [v]Sass
- []eslint/tslint
- []prettier
- []stylelint
- []husky
- []babel
- []CI/CD
- []common style
- []common util
- []common components
- []vuex

### Sass

- yarn add sass --dev

- 配置vite.config.ts

```js
// 添加公共样式
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/var.scss";@import "./src/assets/style/common.scss";'
      }
    }
  }
})
```

### eslint/tslint/prettier/stylelint


#### eslint 搭配 typescript-eslint


使用 ESLint 来进行代码检查，它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint 之后，可以用来检查 TypeScript 代码

```shell
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

