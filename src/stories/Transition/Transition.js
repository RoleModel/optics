export const createTransition = ({
  speed = 'input (120ms)',
}) => {
  const element = document.createElement('div')

  element.innerText = speed

  element.className = `transition-demo transition-demo--${speed}`

  return element;
};
