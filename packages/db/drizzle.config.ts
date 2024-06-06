import type { Config } from "drizzle-kit";

if (!process.env.TURSO_URL) {
  throw new Error("Missing TURSO_URL");
}

const nonPoolingUrl = process.env.TURSO_URL.replace(":6543", ":5432");

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl },
  tablesFilter: ["t3turbo_*"],
} satisfies Config;
