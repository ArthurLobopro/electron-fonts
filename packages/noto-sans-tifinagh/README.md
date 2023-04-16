# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTifinagh from "@electron-fonts/noto-sans-tifinagh"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTifinagh.inject()
})
```