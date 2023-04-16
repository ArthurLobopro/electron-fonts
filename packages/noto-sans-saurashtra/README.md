# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansSaurashtra from "@electron-fonts/noto-sans-saurashtra"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansSaurashtra.inject()
})
```