// Resolve hook so Node can import the story files directly, which use
// extensionless relative imports (e.g. `from '../Button/Button'`) that Vite
// normally resolves for Storybook.
export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context)
  } catch (error) {
    if (error?.code === 'ERR_MODULE_NOT_FOUND' && specifier.startsWith('.') && !specifier.endsWith('.js')) {
      return nextResolve(`${specifier}.js`, context)
    }
    throw error
  }
}
