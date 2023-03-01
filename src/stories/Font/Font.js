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

export const createLineHeight = ({ lineHeight = 'base' }) => {
  const wrapper = document.createElement('div')

  const lineHeightStyle = `var(--rm-line-height-${lineHeight})`
  wrapper.innerHTML = `
    <p style='line-height: ${lineHeightStyle};'>First Line</p>
    <p style='line-height: ${lineHeightStyle};'>Line Height Demo using: ${lineHeightStyle}</p>
    <p style='line-height: ${lineHeightStyle};'>Second Line</p>
  `
  return wrapper
}

export const createFontSize = ({ size = 'medium' }) => {
  const element = document.createElement('p')
  const sizeStyle = `var(--rm-font-${size})`
  element.innerText = `Font Size Demo using: ${sizeStyle}`
  element.style.fontSize = sizeStyle
  return element
}
