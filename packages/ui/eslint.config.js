// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const tsConfig = {
  files: ['**/*.ts', '**/*.tsx','**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx', 'vitest.d.ts'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
      tsconfigRootDir: process.cwd(),
    },
    globals: {
      describe: 'readonly',
      it: 'readonly',
      expect: 'readonly',
      beforeEach: 'readonly',
      afterEach: 'readonly',
      vi: 'readonly',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    react,
    'react-hooks': reactHooks,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'warn',
  },
};

export default [js.configs.recommended, // Ignora arquivos de config e infra
{
  ignores: ['eslint.config.js', '**/*.config.{js,ts}', 'vite.config.ts', 'tailwind.config.js', 'postcss.config.js'],
}, tsConfig, prettier, ...storybook.configs["flat/recommended"]];
