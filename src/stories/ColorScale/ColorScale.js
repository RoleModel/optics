import { capitalize, parameterize } from '../helpers/utils.js'

export const createColorSwatch = ({ scale = 'primary', step = 'base' }) => {
  if (scale !== 'primary' && scale !== 'neutral') {
    scale = `alerts-${scale}`
  }

  const element = document.createElement('div')

  const backgroundColor = `var(--op-color-${parameterize(scale)}-${parameterize(step)})`
  const color = `var(--op-color-${parameterize(scale)}-on-${parameterize(step)})`
  const colorAlt = `var(--op-color-${parameterize(scale)}-on-${parameterize(step)}-alt)`

  element.style.backgroundColor = backgroundColor
  element.classList = 'card-padded'

  element.innerHTML = `
  <p style="color: ${color}">Background: ${capitalize(scale)} ${capitalize(step)}</p>
  <p style="color: ${color}">Text: ${capitalize(scale)} On ${capitalize(step)}</p>
  <p style="color: ${colorAlt}">Alt: ${capitalize(scale)} On ${capitalize(step)} Alt</p>
`

  return element
}
