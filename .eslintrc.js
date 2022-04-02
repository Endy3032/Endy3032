module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  sourceType: "module",
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    indent: ["warn", 2, { SwitchCase: 1, flatTernaryExpressions: true }],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["error", "never"],
    "no-undef": ["off", "never"],
    "no-unused-vars": ["off", "never"],
    "object-curly-spacing": ["warn", "always"],
    "no-whitespace-before-property": "warn"
  }
}
