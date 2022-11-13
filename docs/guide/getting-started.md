<link rel="stylesheet" href="../theme/index.css" />

# Getting Started

## Method 1: Via CDN

1. Include Trigger JS to your webpage with a script tag, with either CDN:
   - UNPKG CDN:
    ```html
    <script src="//unpkg.com/@triggerjs/trigger" defer></script>
    ```
   - jsDelivr CDN:
    ```html
    <script src="//cdn.jsdelivr.net/npm/@triggerjs/trigger" defer></script>
    ```

2. Add `tg-name` to the DOM element that you want to monitor. The value of `tg-name` is the name of the CSS variable that binds to the element.

```html
<div tg-name="scrolled" id="greeting">Hello, World</div>
```

## Method 2: Build from source

1. Get the library in either way:
   - From GitHub
   ```bash
   git clone https://github.com/triggerjs/trigger.git
   ```
   - From NPM
   ```bash
   npm i @triggerjs/trigger
   ```
2. Change to the directory, install the dependencies:
   ```bash
   npm install
   ```
3. There is a pre-built version `bundle.js` located in `dist`. Run a local web server and browse the greeting example in `index.html` :
   1. For example, type `npx serve` in the terminal
   2. Open up `http://localhost:5000` in web browser.
   3. Scroll the page and see the result.
4. The following command will build a new version to `dist/bundle.js`:
   - For development (with watch):
     ```bash
     npm run watch
     ```
   - For development:
     ```bash
     npm run build
     ```
   - For production:
     ```bash
     npm run prod