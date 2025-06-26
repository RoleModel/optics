export const createAvatar = ({
  size = 'large',
  disabled = false,
  imageSource = 'https://picsum.photos/id/1/400/400',
  useLink = true,
}) => {
  const element = document.createElement(useLink ? 'a' : 'div')

  element.href = '/?path=/docs/content-components-avatar--docs'
  element.className = `avatar avatar--${size}`

  const image = document.createElement('img')
  image.src = imageSource
  image.setAttribute('alt', 'Avatar')

  if (disabled) {
    element.classList.add('avatar--disabled')
  }

  element.appendChild(image)

  return element
}
