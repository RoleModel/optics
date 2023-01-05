import { createIcon } from '../Icon/Icon.js'

export const createAlert = ({
  warningLevel = 'warning',
  style = 'filled',
  title = 'Warning',
  description = 'This is a warning alert',
  icon = '',
}) => {
  const element = document.createElement('div')

  element.className = [`alert-${warningLevel}`, `alert--${style}`].join(' ')

  if (icon) {
    const iconElement = createIcon({ name: icon })
    iconElement.classList.add('alert__icon')
    element.appendChild(iconElement)
  }

  const messagesElement = document.createElement('div')
  messagesElement.className = 'alert__messages'
  messagesElement.innerHTML = `
    ${title && `<div class='alert__title'>${title}</div>`}
    <div class='alert__description'>${description}</div>
  `

  element.appendChild(messagesElement)

  return element
}
