# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTakri from "@electron-fonts/noto-sans-takri"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTakri.inject()
})
```