module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@babel/eslint-parser",
  env: {
    node: true,
  },
  settings: {
    react: { version: "detect" },
  },
};
