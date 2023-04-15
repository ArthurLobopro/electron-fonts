# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MacondoSwashCaps from "@electron-fonts/macondo-swash-caps"

window.addEventListener("DOMContentLoaded", () => {
    MacondoSwashCaps.inject()
})
```