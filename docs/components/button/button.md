# Button Component

## Look

![](./button-variations.png)

## Usage

Button classes can be used on `button` or `a` html elements.
They provide consistent and composable styling that should address most applications basic needs.

`.btn` Provides a default outlined black text button. This would be commonly used as a cancel button in a form.
```html
<button class='btn'>Default</button>
```

`.btn--primary` Provides a filled button using the primary color in your theme. This should be used as the primary action on a screen such as the login button on an account screen or the submit button on a form.
```html
<button class='btn--primary'>Primary</button>
```

`.btn--secondary` Provides an outlined button using the primary color in your theme. This should be used as a secondary action on a screen such as the create account button on a login screen.
```html
<button class='btn--secondary'>Secondary</button>
```

`.btn--delete` Provides a filled button using the red danger color. This should be used as a destructive action such as delete.
```html
<button class='btn--delete'>Delete</button>
```

`.btn--outline` This is an alternative to the `.btn--secondary` which could be used as an override, or can be combined with the `.btn--delete` style to provide an outlined red delete button.
```html
<button class='btn--outline'>Outline</button>
<button class='btn--delete btn--outline'>Outline Delete</button>
```

`.btn--text` Provides a button with no border or fill using the primary color from your theme. It maintains the same spacing as other buttons. It can also be combined with the `.btn--delete` to achieve a red text button
```html
<button class='btn--text'>Text</button>
<button class='btn--delete btn--text'>Text Delete</button>
```

`.btn--disabled` Should be used on `a` elements that need to be disabled. `button` elements can used the `disabled` attribute as well as this class. This makes the button opaque and changes the cursor to the `not allowed` icon.
```html
<button class='btn--primary btn--disabled' disabled>Disabled Primary</button>
<a class='btn--delete btn--disabled'>Disabled Delete</button>
```

`.btn--pill` Modifies the shape of any other buttons by adding a radius to the left and right.
```html
<button class='btn--primary btn--pill'>Pill Primary</button>
<a class='btn--delete btn--pill'>Pill Delete</button>
```

`.btn--circle` Modifies the shape of any other button class by adding a full radius to the button. This should be commonly used with an icon as the button text.
```html
<button class='btn--primary btn--circle'>👍</button>
```

`.btn--small` Modifies the size of any other button class by changing the font and padding to be smaller.
```html
<button class='btn--primary btn--small'>Small</button>
```

`.btn--medium` Modifies the size of any other button class by changing the font and padding to be the default size. This would mainly be used as an override if you need to reset the size for some reason.
```html
<button class='btn--primary btn--medium'>Medium</button>
```

`.btn--large` Modifies the size of any other button class by changing the font and padding to be larger.
```html
<button class='btn--primary btn--large'>Large</button>
```
