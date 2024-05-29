import { makeDecorator } from '@storybook/preview-api'

export const useTheme = makeDecorator({
  name: 'useTheme',
  parameterName: 'theme',
  wrapper: (getStory, context, { parameters }) => {
    //document.documentElement refers to html tag inside iframe#storybook-preview-iframe
    const currentTheme = document.documentElement.getAttribute('data-theme-mode')
    const newTheme = context.globals.theme

    if (currentTheme !== newTheme) {
      console.log('should change ')
      document.documentElement.setAttribute('data-theme-mode', newTheme)
    }

    return getStory(context)
  },
})
