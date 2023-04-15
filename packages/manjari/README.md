# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Manjari from "@electron-fonts/manjari"

window.addEventListener("DOMContentLoaded", () => {
    Manjari.inject()
})
```