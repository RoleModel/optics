export const createCard = ({
  padded = false,
  condensed = false,
  label,
  header = '',
  body = '',
  footer = '',
  shadow = 'none',
}) => {
  const card = document.createElement('div')

  const headerHtml = `
  <div class='card__header background-primary-plus-four'>
    ${header}
  </div>
`

  const coreClass = padded ? 'card-padded' : 'card'
  const condensedClass = condensed ? 'card--condensed' : ''
  const shadowClass = shadow === 'none' ? '' : `card--shadow-${shadow}`
  const classes = [coreClass, condensedClass, shadowClass].filter(Boolean).join(' ')

  card.className = classes

  card.innerHTML = header ? headerHtml : label

  if (body) {
    card.innerHTML += `
  <div class='card__body'>
    ${body}
  </div>
`
  }

  if (footer) {
    card.innerHTML += `
  <div class='card__footer background-primary-plus-seven'>
    ${footer}
  </div>
`
  }

  return card
}
