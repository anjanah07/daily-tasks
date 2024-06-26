import { cache } from "react";
import { headers } from "next/headers";

import { createCaller, createTRPCContext } from "@daily-tasks/api";
import { auth } from "@daily-tasks/auth";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return createTRPCContext({
    session: await auth(),
    headers: heads,
  });
});

export const api = createCaller(createContext);
