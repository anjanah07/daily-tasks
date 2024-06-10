import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const stages = sqliteTable("stages", {
  stage_id: integer("stage_id", { mode: "number" }).primaryKey({
    autoIncrement: true,
  }),
  stage_name: text("stage_name").unique().notNull(),
});
