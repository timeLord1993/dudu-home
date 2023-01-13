const IS_PROD = process.env.NODE_ENV === "production";
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser"
  },
  plugins: [
    // "vue",
    "@typescript-eslint"
  ],
  rules: {
    "vue/multi-word-component-names": 0, //关闭vue文件和组件命名校验
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": 0,
    "no-console": IS_PROD ? "error" : "warn",
    "no-debugger": IS_PROD ? "error" : "warn",
    "vue/no-reserved-component-names": 0,
    "vue/require-v-for-key": 0,
    "prettier/prettier": [
      "warn",
      {
        printWidth: 140, //代码单行长度
        tabWidth: 2, //tab键缩进为2空格
        useTabs: false, //使用空格缩进
        singleQuote: false, //js单引号
        semi: true, //去分号
        trailingComma: "none", //无尾逗号
        arrowParens: "avoid", //箭头函数尽可能省略括号
        jsxBracketSameLine: true //标签换行后>单独一行
      }
    ]
  }
};
