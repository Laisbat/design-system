import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      reporter: ["text", "html", "lcov"],
      exclude: [
        "**/node_modules/**",
        "**/src/test/**",
        "**/*.stories.*",
        "**/*.d.ts",
        "**/*.config.{js,ts}",
        "**/theme/**",
      ],
    },
  },
});
