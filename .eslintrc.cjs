module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        jsx: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    plugins: ["vue", "@typescript-eslint", "prettier"],
    root: true,
    rules: {
        // 禁止使用 var
        "no-var": "error",
        // 优先使用 interface 而不是 type
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "no-undef": "off",
        "no-console": "off",
        "no-debugger": "off",
        "vue/no-v-html": "off",
        "vue/multi-word-component-names": 0,
    },
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
    },
}
