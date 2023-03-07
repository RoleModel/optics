export const createMargin = ({
  margin = '',
  marginY = '',
  marginX = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
}) => {
  const wrapper = document.createElement('div')
  wrapper.style.display = 'flex'
  wrapper.style.backgroundColor = 'var(--rm-color-alerts-warning-base)'

  const container = document.createElement('div')
  container.style.backgroundColor = 'var(--rm-color-primary-base)'
  container.style.color = 'var(--rm-color-primary-on-base)'
  container.style.width = 'var(--rm-space-x-large)'
  container.style.minHeight = 'var(--rm-space-x-large)'

  container.className = [
    margin ? `margin-${margin}` : '',
    marginY ? `margin-y-${marginY}` : '',
    marginX ? `margin-x-${marginX}` : '',
    marginTop ? `margin-top-${marginTop}` : '',
    marginBottom ? `margin-bottom-${marginBottom}` : '',
    marginLeft ? `margin-left-${marginLeft}` : '',
    marginRight ? `margin-right-${marginRight}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (!margin) {
    wrapper.style.display = 'inline-flex'
  }

  wrapper.appendChild(container)

  return wrapper
}
