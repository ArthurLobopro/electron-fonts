# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansCoptic from "@electron-fonts/noto-sans-coptic"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansCoptic.inject()
})
```