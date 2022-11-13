
<link rel="stylesheet" href="../../theme/index.css" />

# `tg-filter` 的模式

`tg-filter` 有两个模式，默认是 `retain`，另一个设定值是 `exact`。为了更好的说明差异，请参阅以下例子：

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
    padding: 100vh 0; /* 确保页面有足够空间滚动 */
  }
  #heading {
    --color: black;
    color: var(--color);
  }
</style>
```

上述例子中，文字颜色初始是黑色，而将文字卷动到页面中间时，会变为蓝色。不过文字就永远都不会变回黑色了，因为没有让它改变为黑色的触发点。

如果我们想文字颜色只在计算值是 `5` 的时候改变为蓝色，其他时候是黑色，可以将代码更改为：

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

这样虽然可以，不过很快我们的代码就变得冗长。为了解决这个情况，我们可以将模式切换为 `exact`，只须在 `tg-filter` 的末端加入 `!` 符号即可：

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

在 `exact` 模式下，`--color` 只会在计算值等于 `5` 的时候设定为 `blue`，其他值的时候就变为预设值。

直接在 `tg-filter` 中加入 `!` 符号这种设计，主要是考虑到这种需求应该只会在 `tg-filter` 中发生。如果又另外建立一个属性来设定模式，可能会变得不需要甚至容易误解。

## 继承

就像一些 CSS 属性一样，`tg-` 属性（除了 `tg-follow`，`tg-ref`）的值会继承自父级元素（如果当前元素没有设定的话）。如果不希望继承父级元素的值，并设定为默认值的话，只需增加没有值的 `tg-` 属性即可。例如：

```html
<div tg-name="scale" tg-from="0" tg-to="50">
  <span tg-name="color" tg-to>
    <!-- tg-to 现在的值是 1（默认值） -->
  </span>
</div>
```