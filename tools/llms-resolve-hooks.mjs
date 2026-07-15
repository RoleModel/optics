// Node module-resolution hook (registered by build-llms-docs.mjs) so Node can
// import the story files directly. The stories use extensionless relative
// imports (e.g. `from '../Button/Button'`) that Vite normally resolves for
// Storybook but Node's ESM loader rejects; when such an import fails, retry
// it with `.js` appended (`'../Button/Button'` becomes `'../Button/Button.js'`).
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
