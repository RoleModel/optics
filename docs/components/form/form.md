# Form Components

## Look

![](./form-inputs.png)

## Usage

Form classes can be used on a variety of `inputs` or `select` html elements.
They provide consistent and composable styling that should address most applications basic needs.

`.form__label` Provides basic input label styles.
```html
<label class='form__label'>A Label</label>
```

`.form__input` Provides basic input styles. This can be used on both `input` and `textarea` html elements. It works across a variety of types such as `text`, `number`, `password`, `email`, and `phone`
```html
<input type='text' class='form__input' />
```

`.form__group` Composes an input and label together as a pair. It provides padding between input + label pairs in a form.
```html
<div class='form__group'>
  <label class='form__label'>Text Input</label>
  <input type='text' class='form__input' />
</div>
```

`.form__dropdown` Provides basic `select` element styles.
```html
<select class='form__dropdown'>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

`.form__radio` Provides basic input of type `radio` styles.
```html
<div class='form__group'>
  <input class='form__radio' id='radio-1' type='radio' name='radio' value='1' />
  <label class='form__label' for='radio-1'>Radio 1</label>

  <input class='form__radio' id='radio-2' type='radio' name='radio' value='2' />
  <label class='form__label' for='radio-2'>Radio 2</label>
</div>
```

`.form__checkbox` Provides basic input of type `radio` styles.
```html
<div class='form__group'>
  <input class='form__checkbox' id='checkbox' type='checkbox' />
  <label class='form__label' for='checkbox'>Checkbox</label>
</div>
```

`.form__error-summary` Is an error section, usually displayed above the form with a list of errors.
```html
<div class='form__error-summary'>
  <h2>2 errors prohibited this from being saved</h2>
  <ul>
    <li>Tags rank is not a number</li>
    <li>Title can't be blank</li>
  </ul>
</div>
```

`.form__input--error` and `.form__error` are typically used on combination when there is a validation error on an input. They highlight the input in error along with the message provided.
```html
<div class='form__group form__input--error'>
  <label class='form__label'>Text Input</label>
  <span class='form__error'>Can't be blank</span>
  <input class='form__input' type='text' />
</div>
```
