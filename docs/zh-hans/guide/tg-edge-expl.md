<link rel="stylesheet" href="../../theme/index.css" />

# `tg-edge` 图解

`cover`（默认值）和 `inset` 的区别如下图所示：

![](https://raw.githubusercontent.com/triggerjs/trigger/main/readme-assets/tg-edge-explaination.png)

所以当 `tg-edge="inset"`，元素的高度必须大于浏览器视窗（`window.clientHeight`）的高度。