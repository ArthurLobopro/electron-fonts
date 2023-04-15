# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnekGujarati from "@electron-fonts/anek-gujarati"

window.addEventListener("DOMContentLoaded", () => {
    AnekGujarati.inject()
})
```