# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSyriac from "@electron-fonts/noto-sans-syriac"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSyriac.inject()
})
```