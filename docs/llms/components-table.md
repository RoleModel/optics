# Table

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/table.css)

Table classes provide simple styling for tables and their content.

## Playground

```html
<table class="table table--auto-layout table--default-density">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `style` |  | `default`, `primary`, `danger` |  |
| `layout` |  | `auto`, `fixed` |  |
| `density` |  | `default`, `comfortable`, `compact` |  |
| `striped` |  | `off`, `even`, `odd` |  |
| `sticky` |  | `off`, `header`, `footer`, `both` |  |
| `checkbox` |  |  |  |
| `height` |  |  | This is not a class. It just provides a fixed height to demonstrate the sticky classes |
| `paginationInFooter` |  |  | An example of using the pagination component in the footer of the table |

### Selective Imports

Table can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/table';
```

## Variations

### Default

`.table` Provides a default style to a table element.

```html
<table class="table table--auto-layout table--default-density">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

### Primary

`.table.table--primary` Provides a Primary table. This uses the primary color in the header.

```html
<table class="table table--primary table--auto-layout table--default-density">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

### Danger

`.table.table--danger` Provides a Danger table. This uses the danger alert color in the header.

```html
<table class="table table--danger table--auto-layout table--default-density">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

### Layout

`.table.table--auto-layout`, `.table.table--fixed-layout` (with auto being the default) modify the table layout. Auto will adjust according to the contents, fixed will evenly divide based on the amount of columns.

```html
<table class="table table--fixed-layout table--default-density">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

### Density

`.table.table--default-density`, `.table.table--comfortable-density`, `.table.table--compact-density` (with default being the default) modify the table cell padding to expand or contract how much space they use.

```html
<table class="table table--auto-layout table--comfortable-density">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

```html
<table class="table table--auto-layout table--compact-density">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

### Striping

`.table.table--even-striped`, `.table.table--odd-striped` color every other (odd or even) row with a light color on the neutral scale.

```html
<table class="table table--auto-layout table--default-density table--even-striped">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

```html
<table class="table table--auto-layout table--default-density table--odd-striped">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

### Sticky Header/Footer

`.table.table--sticky-header`, `.table.table--sticky-footer` will make either the table header or table footer sticky; the default is top/bottom of the viewport.

These are best used in conjunction with a wrapping container fixed table height, though they will work outside of that being sticky to the browser window. Because the actual `table` HTML element is a bit finicky, you will need to wrap the `table` itself in a `.table-container` div to achieve correct overflow behavior. You will also need to set a fixed height. This will allow sticky header/footer with scrollable body rows.

```html
<div class="table-container">
  <!-- Container div with class also needs to set the desired height. 20vh in these examples -->
  <table class="table">
    <!-- Actual table element ... -->
  </table>
</div>
```

```html
<div class="table table--container" style="height: 20vh">
  <table class="table table--auto-layout table--default-density table--sticky-header">
    <thead>
      <tr>
        <th>Movie</th>
        <th>Year Released</th>
        <th>Trilogy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Episode IV - A New Hope</td>
        <td>1977</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode V - The Empire Strikes Back</td>
        <td>1980</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode VI - The Return of the Jedi</td>
        <td>1983</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode I - The Phantom Menace</td>
        <td>1999</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode II - Attack of the Clones</td>
        <td>2002</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode III - The Revenge of the Sith</td>
        <td>2005</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode VII - The Force Awakens</td>
        <td>2015</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Rogue One</td>
        <td>2016</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode VIII - The Last Jedi</td>
        <td>2017</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Solo</td>
        <td>2018</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode IX - The Rise of Skywalker</td>
        <td>2019</td>
        <td>Sequel</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Total movies</td>
        <td colspan="1">11</td>
      </tr>
    </tfoot>
  </table>
</div>
```

```html
<div class="table table--container" style="height: 20vh">
  <table class="table table--auto-layout table--default-density table--sticky-footer">
    <thead>
      <tr>
        <th>Movie</th>
        <th>Year Released</th>
        <th>Trilogy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Episode IV - A New Hope</td>
        <td>1977</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode V - The Empire Strikes Back</td>
        <td>1980</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode VI - The Return of the Jedi</td>
        <td>1983</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode I - The Phantom Menace</td>
        <td>1999</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode II - Attack of the Clones</td>
        <td>2002</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode III - The Revenge of the Sith</td>
        <td>2005</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode VII - The Force Awakens</td>
        <td>2015</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Rogue One</td>
        <td>2016</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode VIII - The Last Jedi</td>
        <td>2017</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Solo</td>
        <td>2018</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode IX - The Rise of Skywalker</td>
        <td>2019</td>
        <td>Sequel</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Total movies</td>
        <td colspan="1">11</td>
      </tr>
    </tfoot>
  </table>
</div>
```

```html
<div class="table table--container" style="height: 20vh">
  <table class="table table--auto-layout table--default-density table--sticky-header table--sticky-footer">
    <thead>
      <tr>
        <th>Movie</th>
        <th>Year Released</th>
        <th>Trilogy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Episode IV - A New Hope</td>
        <td>1977</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode V - The Empire Strikes Back</td>
        <td>1980</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode VI - The Return of the Jedi</td>
        <td>1983</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode I - The Phantom Menace</td>
        <td>1999</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode II - Attack of the Clones</td>
        <td>2002</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode III - The Revenge of the Sith</td>
        <td>2005</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode VII - The Force Awakens</td>
        <td>2015</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Rogue One</td>
        <td>2016</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode VIII - The Last Jedi</td>
        <td>2017</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Solo</td>
        <td>2018</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode IX - The Rise of Skywalker</td>
        <td>2019</td>
        <td>Sequel</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Total movies</td>
        <td colspan="1">11</td>
      </tr>
    </tfoot>
  </table>
</div>
```

### With Pagination

The [Pagination](components-pagination.md) component can be used with the table to provide a way to navigate through a large dataset.

Here is an example of using it in the table footer.

```html
<div class="table table--container" style="height: 20vh">
  <table class="table table--auto-layout table--default-density table--sticky-footer">
    <thead>
      <tr>
        <th>Movie</th>
        <th>Year Released</th>
        <th>Trilogy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Episode IV - A New Hope</td>
        <td>1977</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode V - The Empire Strikes Back</td>
        <td>1980</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode VI - The Return of the Jedi</td>
        <td>1983</td>
        <td>Original</td>
      </tr>
      <tr>
        <td>Episode I - The Phantom Menace</td>
        <td>1999</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode II - Attack of the Clones</td>
        <td>2002</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode III - The Revenge of the Sith</td>
        <td>2005</td>
        <td>Prequel</td>
      </tr>
      <tr>
        <td>Episode VII - The Force Awakens</td>
        <td>2015</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Rogue One</td>
        <td>2016</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode VIII - The Last Jedi</td>
        <td>2017</td>
        <td>Sequel</td>
      </tr>
      <tr>
        <td>Solo</td>
        <td>2018</td>
        <td>Anthology</td>
      </tr>
      <tr>
        <td>Episode IX - The Rise of Skywalker</td>
        <td>2019</td>
        <td>Sequel</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          <div class="flex justify-end">
            <nav class="pagination">
              <a class="btn btn--small btn--no-border btn--icon" href="#">
                <span class="material-symbols-outlined">first_page</span>
              </a>
              <a class="btn btn--small btn--no-border" href="#">
                <span class="material-symbols-outlined">chevron_left</span>
                Prev
              </a>
              <a href="#" class="btn btn--no-border btn--active btn--small">1</a>
              <a href="#" class="btn btn--no-border btn--small">2</a>
              <a href="#" class="btn btn--no-border btn--small">3</a>

              <div class="pagination__divider">...</div>

              <a href="#" class="btn btn--no-border btn--small">10</a>
              <a href="#" class="btn btn--no-border btn--small">11</a>
              <a href="#" class="btn btn--no-border btn--small">12</a>
              <a class="btn btn--small btn--no-border" href="#">
                Next
                <span class="material-symbols-outlined">chevron_right</span>
              </a>
              <a class="btn btn--small btn--no-border btn--icon" href="#">
                <span class="material-symbols-outlined">last_page</span>
              </a>
            </nav>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
```

## Table API

Padding table styles are built on CSS variables scoped to the table.

Here are the variables used:

```css
/* Variable API */
--_op-table-cell-padding-default
--_op-table-cell-padding-comfortable
--_op-table-cell-padding-compact
```

## Customizing Table styles

> **Important!:** These patterns represent how to customize the style of the table for your project.

The table classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all table behavior by overriding the `.table` selector and setting any properties:

```css
.table {
  font-size: var(--op-font-2x-large);
}
```

If you want to override how the density modifier behaves, you can use API described above to change which padding each density uses.

```css
.table {
  --_op-table-cell-padding-default: var(--op-space-x-small) var(--op-space-2x-small);
  --_op-table-cell-padding-comfortable: var(--op-space-large) var(--op-space-medium);
  --_op-table-cell-padding-compact: var(--op-space-2x-small) var(--op-space-3x-small);
}
```

If you need to override the color of a particular table style, you can open the respective class and set or change any properties:

```css
/* This will only affect the primary table, but not default or danger */
.table--primary {
  thead {
    background-color: purple;
    color: white;
  }
}
```

## New Table Variations

> **Important!:** These patterns represent how to create new variations of the table for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.table--{name} {
  thead {
    background-color:
    color:
  }
}
```

```css
.table--purple {
  thead {
    background-color: purple;
    color: white;
  }
}
```
