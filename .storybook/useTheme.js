import { useEffect, useGlobals } from '@storybook/addons'

export const useTheme = (StoryFn) => {
  const [{ themeMode }] = useGlobals()

  useEffect(() => {
    //document.documentElement refers to html tag inside iframe#storybook-preview-iframe
    document.documentElement.style = ''
    document.documentElement.dataset.themeMode = themeMode
  }, [themeMode])

  return StoryFn()
}
