export const createAvatar = ({
  size = 'large',
  disabled = false,
  imageSource = 'https://picsum.photos/id/433/500',
  useLink = true,
}) => {
  const element = document.createElement(useLink ? 'a' : 'img')

  if (useLink) {
    element.href = '/?path=/docs/components-avatar--docs'
    element.className = `avatar avatar--${size}`

    const image = document.createElement('img')
    image.src = imageSource
    image.setAttribute('alt', 'Avatar')

    if (disabled) {
      element.classList.add('avatar--disabled')
    }

    element.appendChild(image)
  } else {
    element.src = imageSource
    element.setAttribute('alt', 'Avatar')
    element.className = `avatar avatar--${size}`
    if (disabled) {
      element.classList.add('avatar--disabled')
    }
  }

  return element
}
