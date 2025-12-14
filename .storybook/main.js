/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    {
      name: 'storybook-design-token',
      options: {
        preserveCSSVars: true,
      },
    },
    '@storybook/addon-docs',
  ],

  framework: '@storybook/html-vite',

  staticDirs: [
    {
      from: './assets',
      to: '/public',
    },
  ],

  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },

  features: {
    backgrounds: false,
  },
}
export default config
