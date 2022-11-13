<link rel="stylesheet" href="../theme/index.css" />

# Value Mapping

Number is not suitable for all the situations. For example, we want to update the text color based on the scroll value. the attribute `tg-map` can help.

The following example shows how to update the text color with the rules below:
| Element Position (From the Bottom) | Scroll Value | Text Color |
| ---------------------------------- | --------------- | ---------- |
| 0% - 10% | 1 | black |
| 10% - 20% | 2 | red |
| 20% - 30% | 3 | orange |
| 30% - 40% | 4 | yellow |
| 40% - 50% | 5 | green |
| 50% - 60% | 6 | cyan |
| 60% - 70% | 7 | blue |
| 70% - 80% | 8 | purple |
| 80% - 90% | 9 | grey |
| 90% - 100% | 10 | grey |

```html
<h1
  id="heading"
  tg-name="color"
  tg-from="1"
  tg-to="10"
  tg-steps="9"
  tg-map="1: black; 2: red; 3: orange; 4: yellow; 5: green; 6: cyan; 7: blue; 8: purple; 9,10: grey"
>
  Rainbow Text
</h1>

<style>
  body {
    padding: 100vh 0; /* In order to make the page have enough rooms for scrolling */
  }
  #heading {
    color: var(--color);
  }
</style>
```