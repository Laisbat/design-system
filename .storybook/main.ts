import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  // The Storybook configuration file for a React project using Vite
  framework: getAbsolutePath("@storybook/react-vite"),
  stories: [
    "../packages/ui/src/**/*.mdx",
    "../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [getAbsolutePath("@storybook/addon-onboarding"), getAbsolutePath("@storybook/addon-docs")],
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
