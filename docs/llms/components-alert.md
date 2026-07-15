# Alert

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/alert.css)

Alert classes can be used to create a highlighted message or callout in your application.
These could be as banners for global application messages, or an error message within a section of your app.

## Playground

```html
<div class="alert alert--warning alert--outlined">
  <span class="material-symbols-outlined icon alert__icon">warning</span>
  <div class="alert__messages">
    <div class="alert__title">Warning</div>
    <div class="alert__description">This is a warning alert</div>
  </div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `warningLevel` | `"warning"` | `warning`, `danger`, `info`, `notice` |  |
| `style` |  | `outlined`, `muted`, `filled` |  |
| `title` | `"Warning"` |  |  |
| `description` | `"This is a warning alert"` |  |  |
| `icon` | `"warning"` |  |  |
| `dismissible` |  |  |  |

### Selective Imports

Alert can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/alert';
```

## Variations

### Warning

`.alert--warning` Provides a warning styled message.

```html
<div class="alert alert--warning alert--outlined">
  <span class="material-symbols-outlined icon alert__icon">warning</span>
  <div class="alert__messages">
    <div class="alert__title">Warning</div>
    <div class="alert__description">This is a warning alert</div>
  </div>
</div>
```

### Danger

`.alert--danger` Provides a danger styled message.

`.alert--alert` is an alias for `.alert--danger`. Since RoleModel commonly uses [Rails](https://rubyonrails.org/) to develop projects, adding this alias allows this to be used for flash messages without having to change the default in rails. [Devise](https://github.com/heartcombo/devise) is also commonly used and cannot easily be configured away from this.

```html
<div class="alert alert--danger alert--outlined">
  <span class="material-symbols-outlined icon alert__icon">error</span>
  <div class="alert__messages">
    <div class="alert__title">Danger</div>
    <div class="alert__description">This is a danger alert</div>
  </div>
</div>
```

### Info

`.alert--info` Provides an info styled message.

```html
<div class="alert alert--info alert--outlined">
  <span class="material-symbols-outlined icon alert__icon">error</span>
  <div class="alert__messages">
    <div class="alert__title">Info</div>
    <div class="alert__description">This is an info alert</div>
  </div>
</div>
```

### Notice

`.alert--notice` Provides a notice styled message.

```html
<div class="alert alert--notice alert--outlined">
  <span class="material-symbols-outlined icon alert__icon">task_alt</span>
  <div class="alert__messages">
    <div class="alert__title">Notice</div>
    <div class="alert__description">This is a notice alert</div>
  </div>
</div>
```

### Muted

`.alert--muted` can be applied to any of the above alerts to change the coloring to a muted version of that color.

```html
<div class="alert alert--warning alert--muted">
  <span class="material-symbols-outlined icon alert__icon">volume_mute</span>
  <div class="alert__messages">
    <div class="alert__title">Warning</div>
    <div class="alert__description">This is a muted warning alert</div>
  </div>
</div>
```

### Filled

`.alert--filled` can be applied to any of the above alerts to change the coloring to a filled version of that color.

```html
<div class="alert alert--warning alert--filled">
  <span class="material-symbols-outlined icon alert__icon">check_box_outline_blank</span>
  <div class="alert__messages">
    <div class="alert__title">Warning</div>
    <div class="alert__description">This is a filled warning alert</div>
  </div>
</div>
```

### No Icon

The icon is optional.

```html
<div class="alert alert--warning alert--outlined">
  <div class="alert__messages">
    <div class="alert__title">Warning</div>
    <div class="alert__description">This is a warning alert with no icon</div>
  </div>
</div>
```

### No Title

The title is optional.

```html
<div class="alert alert--warning alert--outlined">
  <span class="material-symbols-outlined icon alert__icon">check_box_outline_blank</span>
  <div class="alert__messages">
    <div class="alert__description">This is a warning alert with no title</div>
  </div>
</div>
```

### Dismissible

If your application needs to allow dismissing these alerts, you can add a second icon/button after the messages section and add functionality via JS.

```html
<div class="alert alert--warning alert--outlined">
  <span class="material-symbols-outlined icon alert__icon">check_box_outline_blank</span>
  <div class="alert__messages">
    <div class="alert__description">This is a warning alert with a close icon</div>
  </div>
  <button class="btn btn--no-border btn--pill btn--icon alert__icon">
    <span class="material-symbols-outlined icon">close</span>
  </button>
</div>
```

### As a Flash or Toast Message

The alert component can also be used as an animated notification message by adding `.alert--flash` to the top level. This supports all the alert variations and styles.

<img src={imageFile} alt="Flash" />

## Alert Structure

All alerts use the following structure to construct the component.

The muted or filled classes would be added at the top level.
icon, title, and the final (dismissible close) icon are all optional.

```html
<div class='alert alert--danger'>
  <span class='alert__icon material-symbols-outlined'>error</div>
  <div class='alert__messages'>
    <div class='alert__title'>Error</div>
    <div class='alert__description'>Your message</div>
    <div class='alert__description'>Another message if you need</div>
  </div>
  <span class='alert__icon material-symbols-outlined'>close</div>
</div>
```

## Customizing alert styles

> **Important!:** These patterns represent how to customize the style of the alert for your project.

The alert classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all alert behavior by overriding the `.alert` selector and setting any properties:

```css
.alert {
  border-radius: var(--op-radius-large);
}
```

If you need to override the behavior of a particular alert style, you can open the respective class and set or change properties.

```css
/* This will only affect the warning alert, but not danger, info, or notice. */
.alert--warning {
  background-color: red;
  color: white;
}
```

## New Alert Variations

> **Important!:** These patterns represent how to create new variations of the alert for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.alert--{name} {
  background-color:
  box-shadow:
  color:

  .alert__title {
    color:
  }

  &.alert--muted {
    background-color:
    box-shadow:
    color:

    .alert__title {
      color:
    }
  }

  &.alert--filled {
    background-color:
    box-shadow:
    color:

    .alert__title {
      color:
    }
  }
}
```

```css
.alert--purple {
  background-color: verylightpurple;
  box-shadow: var(--op-border-all) purple;
  color: purple;

  .alert__title {
    color: darkpurple;
  }

  &.alert--muted {
    background-color: lightpurple;
    box-shadow: none;
    color: white;

    .alert__title {
      color: purple;
    }
  }

  &.alert--filled {
    background-color: purple;
    box-shadow: none;
    color: white;

    .alert__title {
      color: darkpurple;
    }
  }
}
```
