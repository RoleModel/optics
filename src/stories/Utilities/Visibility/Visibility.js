export const createVisibility = ({ visible = false }) => {
  const element = document.createElement('span')
  element.innerText = 'The text'
  
  if (!visible) {
    element.className = 'sr-only'
  }

  return element
}
