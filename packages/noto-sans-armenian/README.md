# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansArmenian from "@electron-fonts/noto-sans-armenian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansArmenian.inject()
})
```