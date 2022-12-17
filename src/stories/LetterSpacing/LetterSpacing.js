export const createLetterSpacing = ({ spacing = 'label' }) => {
  const element = document.createElement('div')

  element.innerText = 'Spacing'
  element.style.letterSpacing = `var(--rm-letter-spacing-${spacing})`

  return element
}
