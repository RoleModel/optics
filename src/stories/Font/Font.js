export const createFontFamily = ({ family = 'Noto Sans' }) => {
  const element = document.createElement('p')
  element.innerText = `Font Family Demo using: ${family}`

  if (family === 'Tilt Neon') {
    element.className = 'font-family-demo--alternative'
  }

  return element
}

export const createFontWeight = ({ weight = 'normal' }) => {
  const element = document.createElement('p')
  const weightStyle = `var(--rm-font-weight-${weight})`
  element.innerText = `Font Weight Demo using: ${weightStyle}`
  element.style.fontWeight = weightStyle
  return element
}
