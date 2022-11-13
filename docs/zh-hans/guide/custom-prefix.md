

# 自定义前缀

假如你担心 `tg-` 前缀可能不符合 HTML 5 的标准，可以通过在 `body` 标签中加入 `data-trigger-prefix` 去自定义它：

```html
<body data-trigger-prefix="data-tg">
  <div data-tg-name="scrolled" id="greeting">Hello, World</div>
</body>
```

上述例子中将前缀自定义为 `data-tg`。`data-*` 是完全符合 HTML5 标准的属性，用于设置自定义的属性和设定值。