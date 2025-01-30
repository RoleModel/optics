export const createDivider = ({ vertical = false, size = 'small', spacing = 'none' }) => {
  const element = document.createElement('div')
  element.className = vertical ? 'divider divider--vertical' : 'divider'

  if (size !== 'small') {
    element.classList.add(`divider--${size}`)
  }

  if (spacing !== 'none') {
    element.classList.add(`divider--spacing-${spacing}`)
  }

  return element
}
