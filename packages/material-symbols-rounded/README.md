# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialSymbolsRounded from "@electron-fonts/material-symbols-rounded"

window.addEventListener("DOMContentLoaded", () => {
    MaterialSymbolsRounded.inject()
})
```