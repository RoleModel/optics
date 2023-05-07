export const createAnimation = ({ speed = 'input (120ms)' }) => {
  const element = document.createElement('div')

  element.innerText = `${speed} Hover Me!`

  element.className = `transition-demo transition-demo--${speed}`

  return element
}
