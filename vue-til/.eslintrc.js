module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "eslint:recommended",
    "plugin:nuxt/recommended",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // "generator-star-spacing": "off",
    // indent: ["error", 2],
    // semi: ["error", "never", { beforeStatementContinuationChars: "always" }],
    // quotes: ["off", "single"],
    // "comma-dangle": [
    //   "error",
    //   {
    //     arrays: "never",
    //     objects: "never",
    //     imports: "never",
    //     exports: "never",
    //     functions: "never"
    //   }
    // ],
    // "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
    // "space-in-parens": ["error", "never"],
    // "space-before-blocks": ["error", "always"],
    // "no-empty": "error",
    // "no-duplicate-imports": "error"
  },
};
