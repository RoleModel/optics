export const createSourceCodeLink = ({ link = '' }) => {
  const element = document.createElement('nav')
  element.className = 'breadcrumbs'

  const fullPath = `https://github.com/RoleModel/optics/blob/main/src/${link}`

  element.innerHTML = `
<div class='breadcrumbs__separator'>|</div>
<a class='breadcrumbs__link' href='${fullPath}'>Source Code</a>
<div class='breadcrumbs__separator'>|</div>
`

  return element
}
