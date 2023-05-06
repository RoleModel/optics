export const createContainer = ({ size = '', padding = '' }) => {
  const page = document.createElement('div')
  page.style.backgroundColor = 'var(--op-color-alerts-warning-base)'
  page.style.height = '30rem'

  const container = document.createElement('div')
  container.style.backgroundColor = 'var(--op-color-alerts-notice-base)'
  container.style.height = '100%'

  container.className = ['container', size ? `container--${size}` : '', padding ? `container--${padding}-padding` : '']
    .filter(Boolean)
    .join(' ')

  const innerContents = document.createElement('div')
  innerContents.style.backgroundColor = 'var(--op-color-primary-base)'
  innerContents.style.height = '100%'

  container.appendChild(innerContents)
  page.appendChild(container)

  return page
}
