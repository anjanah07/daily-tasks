import { authRouter } from "./router/auth";
import { todoRouter } from "./router/todos";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  todos: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export default trpcNext.createNextApiHandler({
//   router: appRouter,
//   createTRPCContext,
// });
