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

  const coreClass = padded ? 'card-padded' : 'card'
  const condensedClass = condensed ? 'card--condensed' : ''
  const shadowClass = shadow === 'none' ? '' : `card--shadow-${shadow}`
  const classes = [coreClass, condensedClass, shadowClass].filter(Boolean).join(' ')

  card.className = classes

  if (!header && !body && !footer) {
    card.innerHTML = label
  }

  if (header) {
    card.innerHTML += `
  <div class='card__header'>
    ${header}
  </div>
`
  }

  if (body) {
    card.innerHTML += `
  <div class='card__body'>
    ${body}
  </div>
`
  }

  if (footer) {
    card.innerHTML += `
  <div class='card__footer'>
    ${footer}
  </div>
`
  }

  return card
}
