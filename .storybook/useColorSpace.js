import { makeDecorator } from 'storybook/preview-api'
import oklchTokens from '../src/core/tokens/oklch/index.css?inline'

const STYLE_ID = 'optics-oklch-tokens'

// The OKLCH tokens use the same names as the HSL ones in preview.css, so appending them last overrides every color.
export const useColorSpace = makeDecorator({
  name: 'useColorSpace',
  parameterName: 'colorSpace',
  wrapper: (getStory, context) => {
    const existing = document.getElementById(STYLE_ID)

    if (context.globals.colorSpace === 'oklch' && !existing) {
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = oklchTokens
      document.head.appendChild(style)
    } else if (context.globals.colorSpace !== 'oklch' && existing) {
      existing.remove()
    }

    return getStory(context)
  },
})
