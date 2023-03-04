export const createItemWidth = ({ width = 'full' }) => {
  const element = document.createElement('div')
  element.innerText = `${width} width`
  element.className = `${width}-width card`

  return element
}
