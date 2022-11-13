<link rel="stylesheet" href="../theme/index.css" />

# The mode of `tg-filter`

here are two modes for `tg-filter`, `retain` by default, the other one is `exact`. Here is an example to clarify this:

```html
<h1
  id="heading"
  tg-name="color"
  tg-from="0"
  tg-to="10"
  tg-step="1"
  tg-filter="5"
  tg-map="5: blue"
>
  Trigger.js
</h1>

<style>
  body {
    padding: 100vh 0; /* In order to make the page have enough rooms for scrolling */
  }
  #heading {
    --color: black;
    color: var(--color);
  }
</style>
```

In the above example, the text has an initial color of black, and it will turn to blue when it arrives at the middle of the page and never turn to black again because there is no trigger point of the black color.

So let's say we want the text color becomes blue only when the calculation value is `5`, and becomes black for other values, We can change it to:

```html
<h1
  id="heading"
  tg-name="color"
  tg-from="0"
  tg-to="10"
  tg-step="1"
  tg-filter="4,5,6"
  tg-map="4: black; 5: blue; 6: black"
>
  Trigger.js
</h1>
```

It works, but the code becomes redundant. To solve this, we can switch the filter mode to `exact` by adding an `!` at the end of the value of `tg-filter`:

```html
<h1
  id="heading"
  tg-name="color"
  tg-from="0"
  tg-to="10"
  tg-step="1"
  tg-filter="5!"
  tg-map="5: blue"
>
  Trigger.js
</h1>
```

In `exact` mode, `--color` becomes `blue` when the value is `5`, and becomes the default when the value is not `5`.

The design of adding `!` to the value of `tg-filter` is the demand is exclusive to the attribute. Establishing another attribute for the mode is unnecessary or even leads to the misunderstanding.
