export const createTab = ({ size = 'large', activeTab = 'USA', disabledTab = 'Canada' }) => {
  const element = document.createElement('div')
  element.className = 'tab-group'

  const createTabItem = (item) => {
    return `<a href='/?path=/docs/components-tab--docs' class='tab${size === 'small' ? ' tab--small' : ''}${
      activeTab === item ? ' tab--active' : ''
    }${disabledTab === item ? ' tab--disabled' : ''}'>${item}</a>`
  }

  const tabs = ['USA', 'Mexico', 'Canada', 'England', 'Germany', 'Spain', 'Austria', 'Australia']

  element.innerHTML += `
  ${tabs.map((item) => createTabItem(item)).join('\n  ')}
`

  return element
}
