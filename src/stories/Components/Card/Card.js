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

  card.className = [
    'card',
    padded ? 'card--padded' : '',
    condensed ? 'card--condensed' : '',
    shadow === 'none' ? '' : `card--shadow-${shadow}`,
  ]
    .filter(Boolean)
    .join(' ')

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
