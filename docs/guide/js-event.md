
# Javascript Event

We can also listen to the `tg` event on an element with JavaScript:

```html
<h1
  id="heading"
  tg-name="color"
  tg-from="1"
  tg-to="3"
  tg-steps="2"
  tg-map="1:#000;2:#666;3:#ccc"
>
  Trigger JS
</h1>

<style>
  body {
    padding: 100vh 0; /* In order to make the page have enough room for scrolling */
  }
  #heading {
    color: var(--color);
  }
</style>

<script>
  document.querySelector('#heading').addEventListener('tg', (e) => {
    console.log(e.detail); // {value: '#666'}
  });
</script>
```