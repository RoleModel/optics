export const createTextPair = ({
  inline = false,
  titleText = 'This is the Title',
  titleSize = '',
  subtitleText = 'This is the Subtitle',
  subtitleSize = '',
}) => {
  const element = document.createElement('div')

  element.className = ['text-pair', inline ? 'text-pair--inline' : ''].filter(Boolean).join(' ')

  const title = document.createElement('span')
  title.className = ['text-pair__title', titleSize === '' ? '' : `text-pair__title--${titleSize}`]
    .filter(Boolean)
    .join(' ')
  title.innerText = titleText

  const subtitle = document.createElement('span')
  subtitle.className = ['text-pair__subtitle', subtitleSize === '' ? '' : `text-pair__subtitle--${subtitleSize}`]
    .filter(Boolean)
    .join(' ')
  subtitle.innerText = subtitleText

  element.append('\n  ')
  element.appendChild(title)
  element.append('\n  ')
  element.appendChild(subtitle)
  element.append('\n')

  return element
}
