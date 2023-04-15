# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BerkshireSwash from "@electron-fonts/berkshire-swash"

window.addEventListener("DOMContentLoaded", () => {
    BerkshireSwash.inject()
})
```