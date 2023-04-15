# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialSymbolsOutlined from "@electron-fonts/material-symbols-outlined"

window.addEventListener("DOMContentLoaded", () => {
    MaterialSymbolsOutlined.inject()
})
```