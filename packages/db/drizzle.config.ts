import type { Config } from "drizzle-kit";

if (!process.env.TURSO_URL) {
  throw new Error("Missing TURSO_URL");
}

export default {
  schema: "./src/schema/*",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  tablesFilter: ["t3turbo_*"],
};
