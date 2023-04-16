# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Plaster from "@electron-fonts/plaster"

window.addEventListener("DOMContentLoaded", () => {
    Plaster.inject()
})
```