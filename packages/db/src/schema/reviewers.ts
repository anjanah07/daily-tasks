import { sqliteTable, text } from "drizzle-orm/sqlite-core";

import { todos } from "./todos";
import { users } from "./users";

export const reviewers = sqliteTable("reviewers", {
  reviewer_id: text("reviewer_id").references(() => users.clerk_id),
  todo_id: text("todo_id").references(() => todos.todo_id),
  assigned_by: text("assigned_by").references(() => users.clerk_id),
});
