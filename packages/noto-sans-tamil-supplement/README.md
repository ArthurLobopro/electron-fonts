# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTamilSupplement from "@electron-fonts/noto-sans-tamil-supplement"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTamilSupplement.inject()
})
```