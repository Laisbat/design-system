import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  stories: ['../packages/ui/src/**/*.stories.@(ts|tsx)'],
};

export default config;
