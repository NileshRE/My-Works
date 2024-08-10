import { Context, useContext } from "react";

export const useContextFallback = <T>(value: Context<T | undefined>) => {
  const context = useContext<T | undefined>(value);

  if (context === undefined) {
    throw new Error(
      `Components that require this context must be children of ${
        value.displayName ?? "the appropriate provider"
      }.`
    );
  }

  return context;
};
