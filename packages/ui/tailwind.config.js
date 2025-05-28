/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}' // ajuste conforme estrutura do seu monorepo
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
