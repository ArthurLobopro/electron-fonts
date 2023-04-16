# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSerifGujarati from "@electron-fonts/noto-serif-gujarati"

window.addEventListener("DOMContentLoaded", () => {
    NotoSerifGujarati.inject()
})
```