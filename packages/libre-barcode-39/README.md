# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBarcode39 from "@electron-fonts/libre-barcode-39"

window.addEventListener("DOMContentLoaded", () => {
    LibreBarcode39.inject()
})
```