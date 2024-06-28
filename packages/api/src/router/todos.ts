import { publicProcedure } from "../trpc";

export const todoRouter = {
  alltodos: publicProcedure
    // .input(z.object({ userId: z.string() }))
    .query(() => {
      try {
        // const todos = await ctx.db.query.todos.findMany({
        //   where: eq(tododb.clerk_id, input.userId),
        // });
        const todos = [1, 2, 3];
        return todos;
      } catch (error) {
        console.error("Error fetching todos:", error);
        throw new Error("Failed to fetch todos");
      }
    }),
};
