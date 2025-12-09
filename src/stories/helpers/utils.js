export const createChildren = (element, count) => {
  Array.from(Array(count)).forEach((_, _i) => {
    const box = document.createElement('div')
    box.style.minWidth = 'var(--op-space-x-large)'
    box.style.minHeight = 'var(--op-space-x-large)'
    box.style.backgroundColor = 'var(--op-color-primary-original)'
    element.appendChild(box)
  })
}

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const parameterize = (string) => string.replace(' ', '-')

export const steps = [
  'plus-max',
  'plus-eight',
  'plus-seven',
  'plus-six',
  'plus-five',
  'plus-four',
  'plus-three',
  'plus-two',
  'plus-one',
  'base',
  'minus-one',
  'minus-two',
  'minus-three',
  'minus-four',
  'minus-five',
  'minus-six',
  'minus-seven',
  'minus-eight',
  'minus-max',
]

export const scales = ['primary', 'neutral', 'alerts-warning', 'alerts-danger', 'alerts-info', 'alerts-notice']

export const getHSLFromVar = (variable) => {
  const style = window.getComputedStyle(document.documentElement)
  const value = style.getPropertyValue(variable)
  return value.trim()
}
