/**
 * This can be removed if MSW is not being removed
 * Just remember to remove it from the main.tsx as well
 */
export const bootstrap = async () => {
  const { worker } = await import("./api-mocks/browser");

  await worker.start();
};
