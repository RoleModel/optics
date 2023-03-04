export const createGap = ({ size = 'md' }) => {
  const wrapper = document.createElement('div')
  wrapper.className = `flex gap-${size}`

  Array.from(Array(5)).forEach((_, _i) => {
    const box = document.createElement('div')
    box.style.width = 'var(--rm-space-x-large)'
    box.style.height = 'var(--rm-space-x-large)'
    box.style.backgroundColor = 'var(--rm-color-primary-original)'
    wrapper.appendChild(box)
  })

  return wrapper
}
