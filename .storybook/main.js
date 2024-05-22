import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  staticDirs: [
    {
      from: './assets',
      to: '/public',
    },
  ],
  framework: {
    name: getAbsolutePath('@storybook/html-vite'),
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
}
export default config
