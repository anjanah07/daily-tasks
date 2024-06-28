import type { LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { schema } from "./exports";

const client = createClient({
  // eslint-disable-next-line no-restricted-properties
  url: process.env.TURSO_URL ?? "",
  // eslint-disable-next-line no-restricted-properties
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db: LibSQLDatabase<typeof schema> = drizzle(client, { schema });
