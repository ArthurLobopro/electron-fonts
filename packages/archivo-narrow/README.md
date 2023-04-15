# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ArchivoNarrow from "@electron-fonts/archivo-narrow"

window.addEventListener("DOMContentLoaded", () => {
    ArchivoNarrow.inject()
})
```