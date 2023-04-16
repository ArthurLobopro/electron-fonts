# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZhiMangXing from "@electron-fonts/zhi-mang-xing"

window.addEventListener("DOMContentLoaded", () => {
    ZhiMangXing.inject()
})
```