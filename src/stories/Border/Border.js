export const createBorder = ({ position = 'all', inset = false }) => {
  const borderElement = document.createElement('div')
  borderElement.innerText = position

  borderElement.style.padding = 'var(--op-space-medium)'

  let shadowStyle = `var(--op-border-${position})`

  if (inset) {
    shadowStyle = `inset ${shadowStyle}`
  }

  if (position !== 'x' && position !== 'y') {
    shadowStyle += ' var(--op-border-color)'
  }

  borderElement.style.boxShadow = shadowStyle

  return borderElement
}
