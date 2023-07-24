export const createTab = ({ size = 'large', activeTab = 'USA', disabledTab = 'Canada' }) => {
  const element = document.createElement('div')
  element.className = 'tab-group'

  const createTabItem = (item) => {
    const link = document.createElement('a')
    link.href = '/?path=/docs/components-tab--docs'

    link.className = [
      'tab',
      size === 'small' ? 'tab--small' : '',
      activeTab === item ? ' tab--active' : '',
      disabledTab === item ? ' tab--disabled' : ''
    ].filter(Boolean).join(' ')

    link.innerText = item

    if (disabledTab === item) {
      link.setAttribute('tabindex', -1)
    }

    return link
  }

  const tabs = ['USA', 'Mexico', 'Canada', 'England', 'Germany', 'Spain', 'Austria', 'Australia']

  element.innerHTML += `
  ${tabs.map((item) => createTabItem(item).outerHTML).join('\n  ')}
`

  return element
}
