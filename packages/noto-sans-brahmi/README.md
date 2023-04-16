# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBrahmi from "@electron-fonts/noto-sans-brahmi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBrahmi.inject()
})
```