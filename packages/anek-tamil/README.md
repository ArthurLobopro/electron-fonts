# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AnekTamil from "@electron-fonts/anek-tamil"

window.addEventListener("DOMContentLoaded", () => {
    AnekTamil.inject()
})
```