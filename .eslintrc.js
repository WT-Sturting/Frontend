module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "no-empty-pattern": 2,
    "no-case-declarations": 2,
    "@typescript-eslint/no-empty-interface": 2,
    "no-use-before-define": 0,
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
  },
};
