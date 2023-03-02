export const createSpacing = ({ spacing = 'medium' }) => {
  const element = document.createElement('div')
  element.style.backgroundColor = 'var(--rm-color-primary-base)'
  element.style.width = `var(--rm-space-${spacing})`
  element.style.height = `3rem`

  const wrapper = document.createElement('div')
  wrapper.innerHTML = `<p>Spacing: var(--rm-space-${spacing})</p>`

  wrapper.appendChild(element)

  return wrapper
}
