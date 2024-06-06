import baseConfig from "@daily-tasks/eslint-config/base";
import reactConfig from "@daily-tasks/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
