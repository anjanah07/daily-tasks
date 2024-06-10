import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { stages } from "./stages";
import { users } from "./users";

export const todos = sqliteTable("todos", {
  todo_id: integer("todo_id", { mode: "number" }).primaryKey({
    autoIncrement: true,
  }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  clerk_id: text("clerk_id").references(() => users.clerk_id),
  stage_id: integer("stage_id").references(() => stages.stage_id),
  proof_url: text("proof_url"),
});
