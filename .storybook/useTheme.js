import { useEffect, useGlobals } from '@storybook/addons'

export const useTheme = (StoryFn) => {
  const [{ theme }] = useGlobals()

  useEffect(() => {
    //document.body refers to body tag inside iframe#storybook-preview-iframe
    document.documentElement.setAttribute('data-theme-mode', theme)
  }, [theme])

  return StoryFn()
};
