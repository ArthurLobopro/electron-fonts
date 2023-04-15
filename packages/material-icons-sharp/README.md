# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaterialIconsSharp from "@electron-fonts/material-icons-sharp"

window.addEventListener("DOMContentLoaded", () => {
    MaterialIconsSharp.inject()
})
```