import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}", "test/**/*"],
    plugins: ["jest"],
    env: {
      "jest/globals": true,
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
