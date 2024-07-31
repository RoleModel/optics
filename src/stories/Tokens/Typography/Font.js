export const createFontFamily = ({ family = 'Noto Sans' }) => {
  const element = document.createElement('p')
  element.innerText = `Font Family Demo using: ${family}`

  if (family === 'Noto Serif') {
    element.className = 'font-family-demo--alternative'
  }

  if (family === 'Tilt Neon') {
    element.className = 'font-family-demo--optional'
  }

  return element
}
