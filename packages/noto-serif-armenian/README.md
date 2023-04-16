# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifArmenian from "@electron-fonts/noto-serif-armenian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifArmenian.inject()
})
```