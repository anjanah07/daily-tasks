// import { authRouter } from "./router/auth";
// import { todoRouter } from "./router/todos";
import { z } from "zod";

import { eq } from "@daily-tasks/db";
import { schema } from "@daily-tasks/db/schema";

import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  // auth: authRouter,
  alltodos: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const todos = await ctx.db.query.todos.findMany({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          where: eq(schema.todos.clerk_id, input.userId),
        });
        // const todos = [1, 2, 3];
        return todos;
      } catch (error) {
        console.error("Error fetching todos:", error);
        throw new Error("Failed to fetch todos");
      }
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export default trpcNext.createNextApiHandler({
//   router: appRouter,
//   createTRPCContext,
// });
