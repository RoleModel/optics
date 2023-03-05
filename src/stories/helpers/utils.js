export const createChildren = (element, count) => {
  Array.from(Array(count)).forEach((_, _i) => {
    const box = document.createElement('div')
    box.style.width = 'var(--rm-space-x-large)'
    box.style.minHeight = 'var(--rm-space-x-large)'
    box.style.backgroundColor = 'var(--rm-color-primary-original)'
    element.appendChild(box)
  })
}
