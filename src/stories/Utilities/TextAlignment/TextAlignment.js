export const createTextAlignment = ({ alignment = 'left' }) => {
  const element = document.createElement('div')
  element.innerText = alignment
  element.className = `text-${alignment} text-alignment-demo`

  return element
}
