# Switch

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/switch.css)

Switch classes can be used to create a stylized checkbox or boolean input.

## Note on Implementation

This is just a styling pattern that builds on standard checkbox inputs. Your project may need some tooling to generate this easily.

A commonly used tool for Ruby on Rails projects is [SimpleForm](https://github.com/heartcombo/simple_form). It allows you to build forms with pre-made inputs and allows you to make custom input types.

[RoleModel Rails SimpleForm Generator](https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/simple_form) provides a generator to install a custom switch input that can be used with SimpleForm with Optics classes applied.

## Playground

```html
<div class="form-group form-group--inline">
  <div class="switch">
    <input type="checkbox" id="switch-demo" />
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">Switch Text</label>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `label` |  |  |  |
| `size` |  | `small`, `large` |  |
| `disabled` |  |  |  |

### Selective Imports

Switch can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/switch';
```

## Variations

### Default

`.switch` Provides basic styling for a checkbox or boolean input. It is intended to be used on an input element if type checkbox. It is also intended to be used within a form group. This typically would use `.form-group.form-group--inline` but can be used without the inline modifier.

```html
<div class="form-group form-group--inline">
  <div class="switch">
    <input type="checkbox" id="switch-demo" />
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">Switch Text</label>
</div>
```

### Size

`.switch--large`, `.switch--small` (with large being the default) modify the size of the switch.

```html
<div class="form-group form-group--inline">
  <div class="switch switch--small">
    <input type="checkbox" id="switch-demo" />
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">Switch Text</label>
</div>
```

### Disabled

`disabled='disabled'` will disable the switch.

```html
<div class="form-group form-group--inline">
  <div class="switch">
    <input type="checkbox" id="switch-demo" disabled />
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">Switch Text</label>
</div>
```

## Switch API

The size styles are built on CSS variables scoped to the switch.

Here are the variables that can be customized:

```css
--_op-switch-height-small
--_op-switch-height-large
--_op-switch-width-small
--_op-switch-width-large
--_op-switch-opacity-disabled
--_op-switch-switch-padding
```

## Customizing Switch styles

> **Important!:** These patterns represent how to customize the style of the switch for your project.

The switch classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all switch behavior by overriding the `.switch` selector and setting any properties:

```css
.switch {
}
```

If you need to override the behavior of a particular switch style, you can open the respective class and set or change properties

```css
.switch--modifier {
}
```

## New Switch Variations

> **Important!:** These patterns represent how to create new variations of the switch for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.switch--{name} {
}
```
