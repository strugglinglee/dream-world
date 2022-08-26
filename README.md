# 一个未知世界

## 技术

Vue 3 + TypeScript + Vite + Sass + Vue Router 4

## Task

- [v]Sass
- [v]eslint/tslint
- [v]prettier
- [v]stylelint
- []husky+lint-staged+comm
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
https://typescript-eslint.io/docs/

使用 ESLint 来进行代码检查，它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint 之后，可以用来检查 TypeScript 代码

```shell
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

创建.eslintrc.cjs配置

```cjs
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};
```
```json
"eslint-plugin-vue": "^9.4.0",
"vue-eslint-parser": "^9.0.3",
```
vue文件增强监测

eslint-plugin-vue 插件依赖 「vue-eslint-parser」解析器。
vue-eslint-parser解析器，只解析 .vue 中html部分的内容，不会检测<script>中的JS内容

#### prettier

```json
"eslint-plugin-vue": "^9.4.0",
"vue-eslint-parser": "^9.0.3",
"prettier": "^2.7.1",
```
[eslint prettier冲突问题参考文章](https://zhuanlan.zhihu.com/p/80574300)

因为 Prettier 和 ESLint 一起使用的时候会有冲突，所以

- 首先我们需要使用 eslint-config-prettier 来关掉 (disable) 所有和 Prettier 冲突的 ESLint 的配置（这部分配置就是上面说的，格式问题的配置，所以关掉不会有问题），方法就是在 .eslintrc 里面将 prettier 设为最后一个 extends

- (可选，推荐) 然后再启用 eslint-plugin-prettier ，将 prettier 的 rules 以插件的形式加入到 ESLint 里面。这里插一句，为什么"可选" ？当你使用 Prettier + ESLint 的时候，其实格式问题两个都有参与，disable ESLint 之后，其实格式的问题已经全部由 prettier 接手了。那我们为什么还要这个 plugin？其实是因为我们期望报错的来源依旧是 ESLint ，使用这个，相当于把 Prettier 推荐的格式问题的配置以 ESLint rules 的方式写入，这样相当于可以统一代码问题的来源。


#### stylelint

```shell
yarn add stylelint stylelint-config-standard stylelint-scss --dev 
```

stylelint-config-standard 是stylelint的推荐配置，stylelint-order是用来在格式化css文件时对代码的属性进行排序。

```json
"postcss": "^8.4.16",
"postcss-html": "^1.5.0",
"postcss-scss": "^4.0.4",
"stylelint": "^14.11.0",
"stylelint-config-html": "^1.1.0",
"stylelint-config-standard": "^28.0.0",
"stylelint-config-standard-scss": "^5.0.0",
"stylelint-order": "^5.0.0",
"stylelint-scss": "^4.3.0",
```

配置参考.stylelintrc.cjs


### husky+lint-staged+commitlint

```shell
yarn add -D husky lint-staged
yarn add -D @commitlint/config-conventional @commitlint/cli
```