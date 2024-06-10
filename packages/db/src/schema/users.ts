import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  clerk_id: text("clerk_id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").unique().notNull(),
});
