const eslintConfig = {
  extends: [
    "@asl-19/eslint-config",
    "@asl-19/eslint-config/react",
    "plugin:require-extensions/recommended",
  ],
  plugins: ["require-extensions"],
  rules: {
    "no-restricted-imports": "off",
  },
};

// eslint-disable-next-line functional/immutable-data
module.exports = eslintConfig;
