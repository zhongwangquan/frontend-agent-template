import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "react-refresh/only-export-components": 0, // 禁用 React Fast Refresh 警告
      "react-hooks/exhaustive-deps": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "no-async-promise-executor": 0,
      "no-extra-semi": 0,
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/no-unused-vars": 0,
    },
  },
]);
