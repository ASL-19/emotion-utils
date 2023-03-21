require("@rushstack/eslint-patch/modern-module-resolution");

const eslintConfig = {
  extends: [
    "@asl-19/eslint-config",
    "@asl-19/eslint-config/react",
    "@asl-19/eslint-config/typescript",
    "plugin:require-extensions/recommended",
  ],
  plugins: ["require-extensions"],
  rules: {
    "no-restricted-imports": "off",
  },
};

module.exports = eslintConfig;
