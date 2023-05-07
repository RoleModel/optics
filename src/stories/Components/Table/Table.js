export const createTable = ({
  style = 'default',
  layout = 'auto',
  density = 'default',
  striped = 'off',
  sticky = 'off',
  height = false,
  checkbox = false,
}) => {
  const tableContainer = document.createElement('div')
  tableContainer.className = 'table-container'

  const table = document.createElement('table')

  let stickyClass = ''
  if (sticky !== 'off') {
    stickyClass = `table--sticky-${sticky}`
  }
  if (sticky === 'both') {
    stickyClass = 'table--sticky-header table--sticky-footer'
  }

  table.className = [
    style === 'default' ? 'table' : `table-${style}`,
    `table--${layout}-layout`,
    `table--${density}-density`,
    striped === 'off' ? '' : `table--${striped}-striped`,
    stickyClass,
  ]
    .filter(Boolean)
    .join(' ')

  table.innerHTML += `
  <thead>
    <tr>
      ${
        checkbox
          ? "<th><div class='flex items-center gap-sm'><input type='checkbox' /><span>Select</span></div></th>"
          : ''
      }
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      ${checkbox ? "<th><input type='checkbox' /></th>" : ''}
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
  `

  if (height) {
    tableContainer.style.height = '20vh'
    tableContainer.appendChild(table)

    return tableContainer
  }

  return table
}
