import { createButton } from '../Button/Button.js'
import { createIcon } from '../Icon/Icon.js'

export const createAlert = ({
  warningLevel = 'warning',
  style = 'outlined',
  title = '',
  description = 'This is a warning alert',
  icon = '',
  dismissible = false,
  iconDocsClassFix = '',
}) => {
  const element = document.createElement('div')

  element.className = ['alert', `alert--${warningLevel}`, `alert--${style}`].join(' ')

  if (icon) {
    const iconElement = createIcon({ name: icon })
    iconElement.classList.add('alert__icon')

    if (iconDocsClassFix) {
      iconElement.classList.add(iconDocsClassFix) // Prevent Storybook styles from interfering.
    }

    element.innerHTML += '\n  ' // Formatting Hack
    element.appendChild(iconElement)
  }

  const messagesElement = document.createElement('div')
  messagesElement.className = 'alert__messages'
  messagesElement.innerHTML = `
    ${title && `<div class='alert__title'>${title}</div>`}
    <div class='alert__description'>${description}</div>
  `

  element.innerHTML += '\n  ' // Formatting Hack
  element.appendChild(messagesElement)
  element.innerHTML += '    \n' // Formatting Hack

  if (dismissible) {
    const iconButton = createButton({ variant: 'default', icon: 'close', pill: true, noBorder: true })
    iconButton.classList.add('alert__icon')
    element.appendChild(iconButton)
  }

  return element
}
