# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBarcodeEAN13Text from "@electron-fonts/libre-barcode-ean13-text"

window.addEventListener("DOMContentLoaded", () => {
    LibreBarcodeEAN13Text.inject()
})
```