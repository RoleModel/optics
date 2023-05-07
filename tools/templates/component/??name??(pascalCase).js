export const create??name??(pascalCase) = ({
  option1 = 'text',
  option2 = false,
  option3 = 'first',
}) => {
  const element = document.createElement('div')

  element.className = '??name??(lowerCase)'
  element.innerHTML = '??name??(pascalCase)'

  return element
}
