# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOldPersian from "@electron-fonts/noto-sans-old-persian"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOldPersian.inject()
})
```