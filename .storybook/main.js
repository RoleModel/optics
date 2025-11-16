/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Storybook Design Token does not officially support v10 so this causes
    // issues, however everything seems to still be working fine without it.
    // See https://github.com/UX-and-I/storybook-design-token/issues/228
    // {
    //   name: 'storybook-design-token',
    //   options: {
    //     preserveCSSVars: true,
    //   },
    // },
    '@storybook/addon-docs',
  ],
  staticDirs: [
    {
      from: './assets',
      to: '/public',
    },
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  features: {
    backgrounds: false,
  },
}
export default config
