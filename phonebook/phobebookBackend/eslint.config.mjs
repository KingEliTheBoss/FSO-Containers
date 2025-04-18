import globals from "globals";
import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node
      },
      ecmaVersion: "latest",
    },
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "@stylistic/js/indent": [
        "error",
        4
      ],
      "@stylistic/js/linebreak-style": [
        "error",
        "unix"
      ],
      "@stylistic/js/quotes": [
        "error",
        "double"
      ],
      "@stylistic/js/semi": [
        "error",
        "always"
      ],
      "eqeqeq": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": [
        "error", "always"
      ],
      "arrow-spacing": [
        "error", { "before": true, "after": true },
      ],
      "no-console": "off",
      "no-unused-vars": "off",
      "no-dupe-keys": "off"
    },
  },
  {
    ignores: ["dist/**", "build/**", "phonebook/**"],
  },
];