import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { todos } from "./todos";
import { users } from "./users";

export const reviews = sqliteTable("reviews", {
  todo_id: integer("todo_id", { mode: "number" })
    .primaryKey()
    .references(() => todos.todo_id),
  reviewer_id: text("reviewer_id").references(() => users.clerk_id),
  status: text("status").notNull(),
  comments: text("comments"),
  assigned_at: text("assigned_at")
    .notNull()
    .default(sql`(current_timestamp)`),
  reviewed_at: text("reviewed_at").default(sql`(current_timestamp)`),
});
