# 一个未知世界

## 技术

Vue 3 + TypeScript + Vite + Sass + Vue Router 4

## Task

- []Sass
- []eslint/tslint
- []prettier
- []stylelint
- []husky
- []babel
- []CI/CD
- []common style
- []common util
- []common components

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

