
# 如何使用

## 方法一：使用 CDN 版本

1. 通过 script 标签将 trigger.js 加载到网页中：
   - UNPKG CDN:
    ```html
    <script src="//unpkg.com/@triggerjs/trigger" defer></script>
    ```
   - jsDelivr CDN:
    ```html
    <script src="//cdn.jsdelivr.net/npm/@triggerjs/trigger" defer></script>
    ```

2. 为对应的 DOM 元素加上 `tg-name` 属性，设定值等于接收数值的 CSS 变量名。

```html
<div tg-name="scrolled" id="greeting">Hello, World</div>
```

上述例子中，CSS 变量 `--scrolled` 会被加入到 `#greeting` 选择器中：

```html
<style>
  body {
    padding: 100vh 0; /* 确保页面有足够空间滚动 */
  }
  #greeting {
    transform: translateX(calc(var(--scrolled) * 1px)); /* 转换为 px 单位 */
  }
</style>
```

3. 滚动页面，测试效果。

## 方法二：从源代码打包

1. 从以下任一途径获取源代码：
   - GitHub
   ```bash
   git clone https://github.com/triggerjs/trigger.git
   ```
   - NPM
   ```bash
   npm i @triggerjs/trigger
   ```
2. 切换到目录内，安装依赖：
   ```bash
   npm install
   ```
3. 本身已经有一个预打包的版本在 `dist/bundle.js`。运行一个本地网页服务器，查看范例欢迎页 `index.html`：
   1. 例如通过运行 `npx serve`
   2. 在浏览器中打开 `http://localhost:5000`
   3. 滚动页面，测试效果。
4. 以下指令会打包一个新的版本到 `dist/bundle.js`:
   - 开发环境版本（持续监听修改）：
     ```bash
     npm run watch
     ```
   - 开发环境版本：
     ```bash
     npm run build
     ```
   - 生产环境版本：
     ```bash
     npm run prod
     ```
