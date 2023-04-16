# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansBengali from "@electron-fonts/noto-sans-bengali"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansBengali.inject()
})
```