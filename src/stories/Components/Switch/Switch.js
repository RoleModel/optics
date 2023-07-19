export const createSwitch = ({ label = 'Switch Text', size = 'large', disabled = false }) => {
  let switchClasses = 'switch'

  if (size === 'small') {
    switchClasses += ' switch--small'
  }

  return `
<div class='form-group form-group--inline'>
  <div class="${switchClasses}">
    <input type="checkbox" id="switch-demo" ${disabled ? 'disabled' : ''}>
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">${label}</label>
</div>
  `
}
