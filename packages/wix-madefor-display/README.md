# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import WixMadeforDisplay from "@electron-fonts/wix-madefor-display"

window.addEventListener("DOMContentLoaded", () => {
    WixMadeforDisplay.inject()
})
```