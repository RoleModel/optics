import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'
import remarkGfm from 'remark-gfm'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-docs',
      // GitHub-flavored Markdown, for the Parts and Props tables in the MDX pages.
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } },
    },
  ],
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
