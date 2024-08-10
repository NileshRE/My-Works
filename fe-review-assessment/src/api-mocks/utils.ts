import { context, createResponseComposition } from "msw";

export const delayedResponse = createResponseComposition(
  undefined,
  process.env.NODE_ENV !== "test" ? [context.delay(500)] : []
);
