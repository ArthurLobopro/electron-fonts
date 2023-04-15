# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialSymbolsSharp from "@electron-fonts/material-symbols-sharp"

window.addEventListener("DOMContentLoaded", () => {
    MaterialSymbolsSharp.inject()
})
```