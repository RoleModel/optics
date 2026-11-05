import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  core: { disableTelemetry: true },
  features: { backgrounds: false },

  async viteFinal(viteConfig) {
    viteConfig.resolve ??= {}
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      '@': fileURLToPath(new URL('..', import.meta.url)),
    }
    // Same reason as the root Storybook: older targets make lightningcss try to polyfill light-dark().
    viteConfig.build ??= {}
    viteConfig.build.cssTarget = ['chrome123', 'edge123', 'firefox120', 'safari17.5', 'ios17.5']
    return viteConfig
  },
}

export default config
