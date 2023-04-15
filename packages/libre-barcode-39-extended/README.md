# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBarcode39Extended from "@electron-fonts/libre-barcode-39-extended"

window.addEventListener("DOMContentLoaded", () => {
    LibreBarcode39Extended.inject()
})
```