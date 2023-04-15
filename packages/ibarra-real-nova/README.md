# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IbarraRealNova from "@electron-fonts/ibarra-real-nova"

window.addEventListener("DOMContentLoaded", () => {
    IbarraRealNova.inject()
})
```