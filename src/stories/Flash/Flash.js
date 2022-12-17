import { createIcon } from '../Icon/Icon.js'

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const createFlash = ({ label, style = 'notice' }) => {
  const flash = document.createElement('div')

  flash.className = ['flash', 'flash--demo', `flash--${style}`].filter(Boolean).join(' ')

  const iconMapping = {
    notice: 'check_circle',
    info: 'info',
    alert: 'cancel',
    warning: 'warning',
  }

  flash.innerHTML += '\n  '

  flash.appendChild(createIcon({ name: iconMapping[style], size: 'large' }))

  flash.innerHTML += `
  <div>
    <div class='flash__message-type'>${capitalize(style)}</div>
    <div class='flash__message'>${label}</div>
  </div>
`

  return flash
}
