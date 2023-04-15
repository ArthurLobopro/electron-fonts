# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IngridDarling from "@electron-fonts/ingrid-darling"

window.addEventListener("DOMContentLoaded", () => {
    IngridDarling.inject()
})
```