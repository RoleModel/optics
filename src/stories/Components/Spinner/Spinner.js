export const createSpinner = ({
  size = 'large',
}) => {
  const element = document.createElement('div')

  element.className = `spinner spinner--${size}`

  return element
}
