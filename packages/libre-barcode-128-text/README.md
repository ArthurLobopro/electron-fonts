# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreBarcode128Text from "@electron-fonts/libre-barcode-128-text"

window.addEventListener("DOMContentLoaded", () => {
    LibreBarcode128Text.inject()
})
```