export const createChildren = (element, count) => {
  Array.from(Array(count)).forEach((_, _i) => {
    const box = document.createElement('div')
    box.style.width = 'var(--op-space-x-large)'
    box.style.minHeight = 'var(--op-space-x-large)'
    box.style.backgroundColor = 'var(--op-color-primary-original)'
    element.appendChild(box)
  })
}

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const parameterize = (string) => string.replace(' ', '-')
