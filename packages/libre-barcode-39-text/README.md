# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBarcode39Text from "@electron-fonts/libre-barcode-39-text"

window.addEventListener("DOMContentLoaded", () => {
    LibreBarcode39Text.inject()
})
```