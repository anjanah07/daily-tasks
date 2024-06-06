import baseConfig, { restrictEnvAccess } from "@daily-tasks/eslint-config/base";
import nextjsConfig from "@daily-tasks/eslint-config/nextjs";
import reactConfig from "@daily-tasks/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
