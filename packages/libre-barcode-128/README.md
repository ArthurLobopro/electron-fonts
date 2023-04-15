# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBarcode128 from "@electron-fonts/libre-barcode-128"

window.addEventListener("DOMContentLoaded", () => {
    LibreBarcode128.inject()
})
```