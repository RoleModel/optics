// Node module-resolution hook (registered by build-llms-docs.mjs) so Node can
// import the story files directly. The stories use extensionless relative
// imports (e.g. `from '../Button/Button'`) that Vite normally resolves for
// Storybook but Node's ESM loader rejects; when such an import fails, retry
// it with `.js` appended (`'../Button/Button'` becomes `'../Button/Button.js'`).
// Also covers the extensionless `file:` URLs build-llms-docs.mjs itself uses to
// dynamically import each MDX page's story modules.
export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context)
  } catch (error) {
    const extensionless = (specifier.startsWith('.') || specifier.startsWith('file:')) && !specifier.endsWith('.js')
    if (error?.code === 'ERR_MODULE_NOT_FOUND' && extensionless) {
      return nextResolve(`${specifier}.js`, context)
    }
    throw error
  }
}
