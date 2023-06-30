export const createToggle = ({ label = 'Toggle Text', size = 'large', disabled = false }) => {
  let toggleClasses = 'toggle'

  if (size === 'small') {
    toggleClasses += ' toggle--small'
  }

  return `
<div class='form-group form-group--inline'>
  <div class="${toggleClasses}">
    <input type="checkbox" id="toggle-demo" ${disabled ? 'disabled' : ''}>
    <label for="toggle-demo"></label>
  </div>
  <label class="form-label" for="toggle-demo">${label}</label>
</div>
  `
}
