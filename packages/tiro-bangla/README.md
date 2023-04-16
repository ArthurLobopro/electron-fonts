# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroBangla from "@electron-fonts/tiro-bangla"

window.addEventListener("DOMContentLoaded", () => {
    TiroBangla.inject()
})
```