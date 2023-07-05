export const createSpinner = ({
  size = 'large',
}) => {
  const element = document.createElement('div')

  element.className = `spinner spinner--${size}`
  element.role = `status`
  element.innerHTML = `<span class="assistive-invisible">Loading</span>`

  return element
}
