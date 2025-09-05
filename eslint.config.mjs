import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

import eslintConfigPrettier from 'eslint-config-prettier/flat'
import storybook from 'eslint-plugin-storybook'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Allow unused arguments starting with an underscore
          varsIgnorePattern: '^_', // Allow unused variables starting with an underscore
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
  ...storybook.configs['flat/recommended'],
])
