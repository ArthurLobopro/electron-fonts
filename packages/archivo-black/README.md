# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ArchivoBlack from "@electron-fonts/archivo-black"

window.addEventListener("DOMContentLoaded", () => {
    ArchivoBlack.inject()
})
```