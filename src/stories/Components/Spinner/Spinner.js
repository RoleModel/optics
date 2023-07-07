export const createSpinner = ({ size = 'large' }) => {
  const element = document.createElement('div')

  element.className = `spinner spinner--${size}`
  element.role = `status`
  element.innerHTML = `<span class="sr-only">Loading</span>`

  return element
}
