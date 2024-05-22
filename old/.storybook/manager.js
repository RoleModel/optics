import { addons } from '@storybook/manager-api'
import rolemodelTheme from './rolemodelTheme'

addons.setConfig({
  enableShortcuts: false,
  theme: rolemodelTheme,
  toolbar: {
    fullscreen: { hidden: true },
    outline: { hidden: true },
    zoom: { hidden: true },
    measure: { hidden: true },
    backgrounds: { hidden: true },
    viewport: { hidden: true },
    grid: { hidden: true },
  },
})
