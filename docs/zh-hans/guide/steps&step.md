# Steps & Step

假设 `tg-from="200"` 以及 `tg-to="-200"`，我们想通过 `transform: translateX()` 将一个元素在 x 方向移动。`tg-steps` 让我们设定从 `200` 到 `-200` 总共有多少步，举个例子，`tg-steps="400"` 等于用 `400` 步从 `200` 递减到 `-200`，每一步等于 `1`；换句话说，`tg-steps="800"` 就代表每一步等于 `0.5`。


但是有些时候，我们不想自行运算，这就是 `tg-step` 出现的原因。`tg-step` 直接定义每一步的值，所以如果定义了 `tg-step`，`tg-steps` 就会被忽略。

## 降噪

有时我们只对某些特定的值感兴趣。例如，我们只想知道从 `0` 至 `100` (`tg-from="0"` 以及 `tg-to="100"`) 之间，什么时候出现 `25, 50, 75`。在这个情况中，`tg-filter` 就可以帮上忙。

```html
<h1
  id="heading"
  tg-name="color"
  tg-from="0"
  tg-to="100"
  tg-step="1"
  tg-filter="25,50,75"
  tg-map="25: red; 50: yellow; 75: green"
>
  Red (25), Yellow (50), Green (75)
</h1>

<style>
  body {
    padding: 100vh 0; /* 确保页面有足够空间滚动 */
  }
  #heading {
    color: var(--color);
  }
</style>
```