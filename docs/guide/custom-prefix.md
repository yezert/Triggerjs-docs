<link rel="stylesheet" href="../theme/index.css" />

# Customising the Prefix


If you are concerned with the `tg-` prefix that doesn't quite fulfill the standard of HTML5, it can be customised by the following setting in the `body` tag with `data-trigger-prefix` attribute:

```html
<body data-trigger-prefix="data-tg">
  <div data-tg-name="scrolled" id="greeting">Hello, World</div>
</body>
```

The above example customises the prefix to `data-tg`. `data-*` is a completely valid attribute for putting custom data in HTML5.
