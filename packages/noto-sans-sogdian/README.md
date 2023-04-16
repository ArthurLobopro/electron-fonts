# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSogdian from "@electron-fonts/noto-sans-sogdian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSogdian.inject()
})
```