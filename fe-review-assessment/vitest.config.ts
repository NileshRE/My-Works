import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest-setup.ts",
      clearMocks: true,
      reporters: ["default", "junit"],
      testTimeout: 10000,
      exclude: [
        ...configDefaults.exclude,
        "src/bootstrap.ts",
        "src/main.tsx",
        "**/api-mocks/**",
      ],
      coverage: {
        provider: "c8",
        reporter: ["json", "lcov", "text", "cobertura"],
        reportsDirectory: "coverage",
        exclude: ["src/bootstrap.ts", "src/main.tsx", "**/api-mocks/**"],
      },
    },
  })
);
