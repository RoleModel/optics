export const createBorder = ({ position = 'all', inset = false }) => {
  const borderElement = document.createElement('div')
  borderElement.innerText = position

  borderElement.style.padding = 'var(--rm-space-medium)'

  let shadowStyle = `var(--rm-border-${position})`

  if (inset) {
    shadowStyle = `inset ${shadowStyle}`
  }

  if (position !== 'x' && position !== 'y') {
    shadowStyle += ' var(--rm-border-color)'
  }

  borderElement.style.boxShadow = shadowStyle

  return borderElement
}
