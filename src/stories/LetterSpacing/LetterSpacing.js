export const createLetterSpacing = ({ spacing = 'label' }) => {
  const element = document.createElement('div')

  element.innerText = 'Spacing'
  element.style.letterSpacing = `var(--op-letter-spacing-${spacing})`

  return element
}
