import { createButton } from '../Button/Button'
import { createIcon } from '../Icon/Icon'

export const createTooltip = ({ text = 'Tooltip Contents', position = 'none', example = 'text' }) => {
  const wrapper = document.createElement('div')
  wrapper.style.margin = 'var(--op-space-4x-large)'

  let element = document.createElement('p')
  element.innerText = 'A Text Example'

  if (example === 'button') {
    element = createButton({ label: 'A Button Example' })
  }

  if (example === 'icon') {
    element = createIcon({ name: 'info' })
  }

  element.dataset.tooltipText = text
  if (position !== 'none') {
    element.dataset.tooltipPosition = position
  }

  wrapper.appendChild(element)

  return wrapper
}
